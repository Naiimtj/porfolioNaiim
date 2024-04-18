import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
// icons
import SunIcon from "./icons/Sun";
import MoonIcon from "./icons/Moon";
import SystemIcon from "./icons/System";

const THEMES = ["Light", "Dark", "System"];

const ThemeSwitcher = () => {
  const [t] = useTranslation("translation");
  const getInitialTheme = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") || "system";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = () => setTheme(getInitialTheme());

    matchMedia.addEventListener("change", handleThemeChange);

    return () => matchMedia.removeEventListener("change", handleThemeChange);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeTheme = (selectedTheme) => {
    localStorage.setItem("theme", selectedTheme);
    setTheme(selectedTheme);
    updateTheme(selectedTheme);
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

  useEffect(() => {
    updateTheme(theme); // Update theme on initial render and theme change

    const handleClickOutside = (event) => {
      const themesMenu = document.getElementById("themes-menu");
      if (themesMenu && !themesMenu.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    themeToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setIsMenuOpen(!isMenuOpen);
    });

    const themeMenuOptions = document.querySelectorAll(".themes-menu-option");
    themeMenuOptions.forEach((element) => {
      element.addEventListener("click", (e) => {
        const selectedTheme = e.target.innerText.toLowerCase().trim();
        changeTheme(selectedTheme);
      });
    });

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <div className="relative ml-1 mr-1">
      <button
        id="theme-toggle-btn"
        className="appearance-none border-none flex hover:scale-125 transition"
        onClick={toggleMenu}
      >
        <span className="sr-only">{t("Select theme")}</span>
        <SunIcon
          id="light"
          className={`theme-toggle-icon size-5 transition-all ${
            theme === "light" && "scale-100"
          }`}
        />
        <MoonIcon
          id="dark"
          className={`theme-toggle-icon absolute size-5 transition-all ${
            theme === "dark" && "scale-100"
          }`}
        />
        <SystemIcon
          id="system"
          className={`theme-toggle-icon absolute size-5 transition-all ${
            theme === "system" && "scale-100"
          }`}
        />
      </button>
      {isMenuOpen && (
        <div
          id="themes-menu"
          className="absolute scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md"
        >
          <ul>
            {THEMES.map((themeOption) => (
              <li
                key={themeOption}
                className="themes-menu-option px-2 py-1.5 cursor-pointer hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
                onClick={() => {
                  changeTheme(themeOption.toLowerCase().trim());
                  setIsMenuOpen(false);
                }}
              >
                {t(themeOption)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
