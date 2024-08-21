import { useTranslation } from "react-i18next";
import { GitHub, LinkedInIcon, MailIcon } from "../assets/icons/SocialMedia";
import { Download } from "../assets/icons";
import personalImageAlt from "/me.webp";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import SectionContainer from "../components/SectionContainer";
import Badge from "../components/Badge";
import SocialPill from "../components/SocialPill";
import DownloadPill from "../components/DownloadPill";

const Home = () => {
  const [t] = useTranslation("translation");
  return (
    <div className="!scroll-smooth">
      <SectionContainer className="md:py-44 pt-32 md:pb-32 pb-20 flex flex-col gap-y-10">
        <div className="md:text-left">
          <div className="flex gap-6 mb-4">
            <img
              className="rounded-full shadow-lg size-32"
              src={personalImageAlt}
              alt={t("Picture Naiim")}
            />
            <Badge txtAlt={t("Button Available for work")}>
              {t("Available for work")}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
            {t("Hey, I'm")} Naiim
          </h1>
          <div className="md:mt-6 mt-4 text-xl text-gray-800 dark:text-gray-300">
            <p className="dark:[&>strong]:text-purple-300 [&>strong]:text-purple-500 [&>strong]:font-semibold">
              <strong>{t("Full Stack Developer")}</strong>{" "}
              <span className="hidden md:inline-block">
                {t("from Madrid, Spain.")}
              </span>
            </p>
            <p className="pt-4 md:pt-0">
              {t("Specialized in the development of unique web applications.")}
            </p>
          </div>
          {/* // - SOCIAL MEDIA */}
          <nav className="flex flex-wrap justify-left md:justify-start gap-4 mt-8">
            <SocialPill
              url="mailto:naiim.tj@gmail.com"
              txtAlt={t("Button to contact me")}
            >
              <MailIcon className="md:size-5 size-8" />
              <span className="hidden md:block">{t("Contact me")}</span>
            </SocialPill>
            <SocialPill
              url="https://linkedin.com/in/naiim-taefy-jimenez"
              txtAlt={t("Button to my LinkedIn")}
            >
              <LinkedInIcon className="md:size-5 size-8" />
              <span className="hidden md:block">LinkedIn</span>
            </SocialPill>
            <SocialPill
              url="https://github.com/Naiimtj"
              txtAlt={t("Button to my GitHub")}
            >
              <GitHub className="md:size-5 size-8" />
              <span className="hidden md:block">GitHub</span>
            </SocialPill>
            <DownloadPill
              url={`/Naiim Taefy Jiménez - ${
                t("en-EN") === "en-EN" ? "Resume_CV" : "Curriculum"
              }.pdf`}
              name={
                t("en-EN") === "en-EN"
                  ? "Naiim Taefy Jiménez - Resume_CV.pdf"
                  : "Naiim Taefy Jiménez - Curriculum.pdf"
              }
              txtAlt={t("Button Download Resume_CV pdf")}
            >
              <Download className="md:size-5 size-8" />
              {t("Download CV")}
            </DownloadPill>
          </nav>
        </div>
      </SectionContainer>
      <WorkExperience />
      <Projects />
      <AboutMe />
    </div>
  );
};

export default Home;
