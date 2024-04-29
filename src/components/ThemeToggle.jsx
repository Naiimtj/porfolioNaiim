import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "../assets/icons";

const ThemeSwitcher = () => {
  const [t] = useTranslation("translation");
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    updateTheme(theme);
    updateScrollbarStyles();
  }, [theme]);

  const changeTheme = () => {
    const selectedTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", selectedTheme);
    setTheme(selectedTheme);
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
    const isDarkMode = theme === "dark";
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

  const getSystemColorScheme = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    } else {
      return "light";
    }
  };

  function getInitialTheme() {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else {
      const systemTheme = getSystemColorScheme();
      localStorage.setItem("theme", systemTheme);
      return systemTheme;
    }
  }

  return (
    <div className="relative ml-1 mr-1">
      <button
        id="theme-toggle-btn"
        className="themes-menu-option appearance-none border-none flex hover:scale-125 transition duration-300"
        onClick={changeTheme}
        alt={`${t("Change theme to")} ${theme === "dark" ? t("light") : t("dark")}`}
      >
        <span className="sr-only">{t("Select theme")}</span>
        {theme === "dark" ? (
          <Moon
            id="dark"
            className="theme-toggle-icon size-7 md:size-5 transition-all scale-100"
          />
        ) : (
          <Sun
            id="light"
            className="theme-toggle-icon size-7 md:size-5 transition-all scale-100"
          />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
