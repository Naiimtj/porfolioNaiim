import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
// icons
import SunIcon from "./icons/Sun";
import MoonIcon from "./icons/Moon";

const ThemeSwitcher = () => {
  const [t] = useTranslation("translation");

  const getInitialTheme = () => {
    if (typeof localStorage !== "undefined") {
      if(localStorage.getItem("theme")){
        return localStorage.getItem("theme")
      }else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          return localStorage.setItem("theme", "dark");
        } else {
          return localStorage.setItem("theme", "light");
        }
      }
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };
  const initialTheme = getInitialTheme();
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    updateScrollbarStyles();

    const handleThemeChange = () => setTheme(getInitialTheme());

    matchMedia.addEventListener("change", handleThemeChange);

    return () => matchMedia.removeEventListener("change", handleThemeChange);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeTheme = (selectedTheme) => {
    localStorage.setItem("theme", selectedTheme);
    setTheme(selectedTheme);
    updateTheme(selectedTheme);
    updateScrollbarStyles();
  };

  const updateTheme = (themePreference) => {
    const isDark =
      themePreference === "dark" ||
      (themePreference === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
    updateIcon(themePreference);
  };

  const updateIcon = (themePreference) => {
    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
      element.style.transform =
        element.id === themePreference ? "scale(1)" : "scale(0)";
    });
  };
  const updateScrollbarStyles = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    const scrollbarTrackColor = isDarkMode ? "rgb(2 6 23)" : "rgb(249 250 251)";
    const scrollbarThumbColor = isDarkMode
      ? "linear-gradient(rgb(2 6 23), rgb(87, 41, 167), rgb(2 6 23))"
      : "linear-gradient(rgb(249 250 251), rgb(87, 41, 167), rgb(249 250 251))";

    document.documentElement.style.setProperty(
      "--scrollbar-track-color",
      scrollbarTrackColor
    );
    document.documentElement.style.setProperty(
      "--scrollbar-thumb-color",
      scrollbarThumbColor
    );
  };
  useEffect(() => {
    updateTheme(theme); // Update theme on initial render and theme change

    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    themeToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setIsMenuOpen(!isMenuOpen);
    });

    const themeMenuOptions = document.querySelectorAll(".themes-menu-option");
    themeMenuOptions.forEach((element) => {
      element.addEventListener("click", (e) => {
        const selectedTheme = e.target.id === "dark" ? "light": "dark";
        changeTheme(selectedTheme);
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  let ThemeMenuIcon;
  switch (theme) {
    case "light":
      ThemeMenuIcon = (
        <SunIcon
          id="light"
          className="theme-toggle-icon size-7 md:size-5 transition-all scale-100"
        />
      );
      break;
    case "dark":
      ThemeMenuIcon = (
        <MoonIcon
          id="dark"
          className="theme-toggle-icon size-7 md:size-5 transition-all scale-100"
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className="relative ml-1 mr-1">
      <button
        id="theme-toggle-btn"
        className="themes-menu-option appearance-none border-none flex hover:scale-125 transition duration-300"
        onClick={() => changeTheme(theme === "dark" ? "light": "dark")}
        alt={t('Change theme')}
      >
        <span className="sr-only">{t("Select theme")}</span>
        {ThemeMenuIcon}
      </button>      
    </div>
  );
};

export default ThemeSwitcher;
