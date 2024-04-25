import { useTranslation } from "react-i18next";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import SectionContainer from "../components/SectionContainer";
import Badge from "../components/Badge";
import {
  GitHub,
  LinkedInIcon,
  MailIcon,
} from "../components/icons/SocialMedia";
import SocialPill from "../components/SocialPill";
import personalImageAlt from "/me.png";
import DownloadPill from "../components/DownloadPill";
import Download from "../components/icons/Download";

const Home = () => {
  const [t] = useTranslation("translation");
  return (
    <div className="!scroll-smooth">
      <SectionContainer className="md:py-44 pt-32 md:pb-32 pb-20 flex flex-col gap-y-10">
        <div className="">
          <div className="flex gap-6 mb-4">
            <img
              className="rounded-full shadow-lg size-32"
              src={personalImageAlt}
              alt={t("Picture Naiim")}
            />
            <Badge>{t("Available for work")}</Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
            {t("Hey, I'm")} Naiim
          </h1>
          <div className="mt-6 text-xl text-gray-800 dark:text-gray-300">
            <p className="dark:[&>strong]:text-purple-300 [&>strong]:text-purple-500 [&>strong]:font-semibold">
              <strong>{t("Front-End Developer")}</strong>{" "}
              {t("from Madrid, Spain.")}
            </p>
            <p>
              {t("Specialized in the development of unique web applications.")}
            </p>
          </div>
          {/* // - SOCIAL MEDIA */}
          <nav className="flex flex-wrap gap-4 mt-8">
            <SocialPill url="mailto:naiim.tj@gmail.com">
              <MailIcon className="size-5" />
              {t("Contact me")}
            </SocialPill>
            <SocialPill url="https://linkedin.com/in/naiim-taefy-jimenez">
              <LinkedInIcon className="size-5" />
              LinkedIn
            </SocialPill>
            <SocialPill url="https://github.com/Naiimtj">
              <GitHub className="size-5" />
              GitHub
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
            >
              <Download className="size-5" />
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
