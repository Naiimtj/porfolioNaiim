import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Briefcase from "../components/icons/Briefcase";
import Code from "../components/icons/Code";
import ProfileCheck from "../components/icons/ProfileCheck";
import NavMenu from "./NavMenu";
import ThemeSwitcher from "../components/ThemeToggle";
import { useEffect, useState } from "react";

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const NavBar = () => {
  const [t] = useTranslation("translation");
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2;

      const experienceSection = document.getElementById("experience");
      const projectsSection = document.getElementById("projects");
      const aboutMeSection = document.getElementById("about-me");

      if (
        experienceSection &&
        experienceSection.offsetTop <= scrollPosition &&
        experienceSection.offsetTop + experienceSection.offsetHeight >
          scrollPosition
      ) {
        setActiveSection("experience");
      } else if (
        projectsSection &&
        projectsSection.offsetTop <= scrollPosition &&
        projectsSection.offsetTop + projectsSection.offsetHeight >
          scrollPosition
      ) {
        setActiveSection("projects");
      } else if (
        aboutMeSection &&
        aboutMeSection.offsetTop <= scrollPosition &&
        aboutMeSection.offsetTop + aboutMeSection.offsetHeight > scrollPosition
      ) {
        setActiveSection("about-me");
      } else {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="fixed z-50 top-0 left-0 right-0 pt-4">
        <div className="flex justify-center items-center">
          <div
            className={`flex items-center backdrop-blur-md ${
              activeSection ? "dark:bg-black/25 bg-white/25" : ""
            } p-2 rounded-xl`}
          >
            <nav className="text-right col-span-2 flex justify-end items-center">
              <Link
                className={`${
                  activeSection === "experience"
                    ? "dark:text-lilaPortfolio font-bold text-black"
                    : "dark:text-grayPortfolio text-grayLightPortfolio "
                } text-xs md:text-base lg:text-xl pr-4 hover:text-lilaLightPortfolio dark:hover:text-gray-300 transition duration-300 flex items-center`}
                onClick={() => scrollToSection("experience")}
              >
                <Briefcase className="size-6 mr-1" />
                {t("Work Experience")}
              </Link>
              <Link
                className={`${
                  activeSection === "projects"
                    ? "dark:text-lilaPortfolio font-bold text-black"
                    : "dark:text-grayPortfolio text-grayLightPortfolio"
                } text-xs md:text-base lg:text-xl pr-4 hover:text-lilaLightPortfolio dark:hover:text-gray-300 transition duration-300 flex items-center`}
                onClick={() => scrollToSection("projects")}
              >
                <Code className="size-6 mr-1" />
                {t("Projects")}
              </Link>
              <Link
                className={`${
                  activeSection === "about-me"
                    ? "dark:text-lilaPortfolio font-bold text-black"
                    : "dark:text-grayPortfolio text-grayLightPortfolio"
                } text-xs md:text-base lg:text-xl pr-4 hover:text-lilaLightPortfolio dark:hover:text-gray-300 transition duration-300 flex items-center`}
                onClick={() => scrollToSection("about-me")}
              >
                <ProfileCheck className="size-6 mr-1" />
                {t("About Me")}
              </Link>
            </nav>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <div className="absolute top-6 right-0 z-50">
        <NavMenu />
      </div>
    </div>
  );
};

export default NavBar;
