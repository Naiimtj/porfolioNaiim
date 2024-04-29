import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "../assets/icons";

const ThemeSwitcher = () => {
  const [t] = useTranslation("translation");
  const initTheme =
    typeof localStorage !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "dark";
  const [theme, setTheme] = useState(initTheme);
  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    updateScrollbarStyles();

    const handleThemeChange = () => setTheme(initTheme);

    matchMedia.addEventListener("change", handleThemeChange);

    return () => matchMedia.removeEventListener("change", handleThemeChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTheme = (selectedTheme) => {
    localStorage.setItem("theme", selectedTheme);
    setTheme(selectedTheme);
    updateTheme(selectedTheme);
    updateScrollbarStyles();
  };

  const updateTheme = (themePreference) => {
    const isDark = themePreference === "dark";
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
      const selectedTheme = theme === "dark" ? "light" : "dark";
      changeTheme(selectedTheme);
    });

    const themeMenuOptions = document.querySelectorAll(".themes-menu-option");
    themeMenuOptions.forEach((element) => {
      element.addEventListener("click", (e) => {
        const selectedTheme = e.target.id === "dark" ? "light" : "dark";
        changeTheme(selectedTheme);
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let ThemeMenuIcon;
  switch (theme) {
    case "light":
      ThemeMenuIcon = (
        <Sun
          id="light"
          className="theme-toggle-icon size-7 md:size-5 transition-all scale-100"
        />
      );
      break;
    case "dark":
      ThemeMenuIcon = (
        <Moon
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
        onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
        alt={`${t("Change theme to")} ${
          theme === "dark" ? t("light") : t("dark")
        }`}
      >
        <span className="sr-only">{t("Select theme")}</span>
        {ThemeMenuIcon}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
