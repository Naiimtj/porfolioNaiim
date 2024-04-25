import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Briefcase from "../components/icons/Briefcase";
import Code from "../components/icons/Code";
import ProfileCheck from "../components/icons/ProfileCheck";
import NavMenu from "../components/NavMenu";
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
  const [menuOpen, setMenuOpen] = useState(false);

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
  const currentScreenWidth = window.innerWidth;
  const [screenWidth, setScreenWidth] = useState(currentScreenWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767 && !screenWidth) {
        setScreenWidth(true);
      } else if (window.innerWidth >= 767 && screenWidth) {
        setScreenWidth(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);
  return (
    <div className="relative">
      <div className="fixed z-50 top-0 left-0 right-0 md:pt-4">
        {screenWidth ? (
          <div
            className={`absolute md:hidden flex gap-4 mx-4 pt-4 mt-5 backdrop-blur-md ${
              activeSection ? "dark:bg-black/25 bg-white/25" : ""
            } p-2 rounded-xl`}
          >
            <NavMenu />
          </div>
        ) : null}
        <div className="flex justify-end md:justify-center items-center">
          <div
            className={`flex items-center backdrop-blur-md ${
              activeSection ? "dark:bg-black/25 bg-white/25" : ""
            } md:p-2 md:mt-0 md:mx-0 mx-4 mt-5 rounded-xl`}
          >
            <nav className="text-right flex justify-end items-center">
              <div className="flex flex-wrap items-center justify-end max-w-screen-xl mx-auto md:p-4 p-2">
                <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                </div>
                {/* // - MENU */}
                <div
                  className={`items-center justify-between ${
                    !menuOpen ? "hidden" : ""
                  } w-full md:flex md:w-auto md:order-1`}
                >
                  <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse items-end">
                    <li>
                      <Link
                        className={`${
                          activeSection === "experience"
                            ? "dark:text-lilaPortfolio font-bold text-black"
                            : "dark:text-grayPortfolio text-grayLightPortfolio "
                        } text-base md:text-base lg:text-xl md:pr-4 my-2 md:my-0 hover:text-lilaLightPortfolio dark:hover:text-gray-300 transition duration-300 flex items-center`}
                        onClick={() => scrollToSection("experience")}
                      >
                        <Briefcase className="size-6 mr-1" />
                        {t("Work Experience")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          activeSection === "projects"
                            ? "dark:text-lilaPortfolio font-bold text-black"
                            : "dark:text-grayPortfolio text-grayLightPortfolio"
                        } text-base md:text-base lg:text-xl md:pr-4 my-2 md:my-0 hover:text-lilaLightPortfolio dark:hover:text-gray-300 transition duration-300 flex items-center`}
                        onClick={() => scrollToSection("projects")}
                      >
                        <Code className="size-6 mr-1" />
                        {t("Projects")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          activeSection === "about-me"
                            ? "dark:text-lilaPortfolio font-bold text-black"
                            : "dark:text-grayPortfolio text-grayLightPortfolio"
                        } text-base md:text-base lg:text-xl md:pr-4 my-2 md:my-0 hover:text-lilaLightPortfolio dark:hover:text-gray-300 transition duration-300 flex items-center`}
                        onClick={() => scrollToSection("about-me")}
                      >
                        <ProfileCheck className="size-6 mr-1" />
                        {t("About Me")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {!screenWidth ? (
              <div className="md:flex items-center gap-8 hidden">
                <NavMenu />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
