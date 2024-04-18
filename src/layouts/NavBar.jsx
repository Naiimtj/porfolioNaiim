import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Briefcase from "../components/icons/Briefcase";
import Code from "../components/icons/Code";
import ProfileCheck from "../components/icons/ProfileCheck";
import NavMenu from "./NavMenu";
import ThemeSwitcher from "../components/ThemeToggle";

const NavBar = () => {
  const location = useLocation();
  const [t] = useTranslation("translation");
  const currentURL = location.pathname;

  return (
    <div className="relative">
      <div className="fixed z-50 top-0 left-0 right-0 pt-6">
        <div className="flex justify-center items-center">
          <nav className="text-right col-span-2 flex justify-end items-center">
            <Link
              className={`${
                currentURL === "/#experience"
                  ? "dark:text-lilaPortfolio font-bold text-black"
                  : "dark:text-grayPortfolio text-gray-600"
              } text-xs md:text-base lg:text-xl pr-4 hover:text-purple-600 dark:hover:text-gray-300 transition duration-300 flex items-center`}
              to="/"
            >
              <Briefcase className="size-6 mr-1" />
              {t("Work Experience")}
            </Link>
            <Link
              className={`${
                currentURL === "/#projects"
                  ? "dark:text-lilaPortfolio font-bold text-black"
                  : "dark:text-grayPortfolio text-gray-600"
              } text-xs md:text-base lg:text-xl pr-4 hover:text-purple-600 dark:hover:text-gray-300 transition duration-300 flex items-center`}
              to="/projects"
            >
              <Code className="size-6 mr-1" />
              {t("Projects")}
            </Link>
            <Link
              className={`${
                currentURL === "/#aboutMe"
                  ? "dark:text-lilaPortfolio font-bold text-black"
                  : "dark:text-grayPortfolio text-gray-600"
              } text-xs md:text-base lg:text-xl pr-4 hover:text-purple-600 dark:hover:text-gray-300 transition duration-300 flex items-center`}
              to="/about-me"
            >
              <ProfileCheck className="size-6 mr-1" />
              {t("About Me")}
            </Link>
          </nav>
          <ThemeSwitcher />
        </div>
      </div>
      <div className="absolute top-6 right-0">
        <NavMenu />
      </div>
    </div>
  );
};

export default NavBar;
