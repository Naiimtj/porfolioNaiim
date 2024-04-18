import { useTranslation } from "react-i18next";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import SectionContainer from "../components/SectionContainer";
import Badge from "../components/Badge";
import { LinkedInIcon, MailIcon } from "../components/icons/SocialMedia";
import SocialPill from "../components/SocialPill";
// import personalImageAlt from "../../public/me.png";

const Home = () => {
  const [t] = useTranslation("translation");
  return (
    <div>
      <SectionContainer className="py-44 pb-32 flex flex-col gap-y-10">
        <div className="max-w-xl">
          <div className="flex gap-4 mb-4">
            {/* <img
              className="rounded-full shadow-lg size-16"
              src={personalImageAlt}
              alt={t("Picture Naiim")}
            /> */}
            <a
              href="https://linkedin.com/in/naiim-taefy-jimenez"
              target="_blank"
              rel="noopener"
              className="flex items-center transition md:justify-center"
            >
              <Badge>{t("Open to opportunities")}</Badge>
            </a>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
            {t("Hey, I'm")} Naiim
          </h1>
          <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-purple-300 [&>strong]:text-purple-500 [&>strong]:font-semibold dark:text-gray-300">
            <strong>{t("Front-End Developer")}</strong>{" "}
            {t(
              "from Madrid, Spain. Specialized in the development of unique web applications."
            )}
          </p>
          <nav className="flex flex-wrap gap-4 mt-8">
            <SocialPill url="mailto:naiim.tj@gmail.com">
              <MailIcon className="size-5" />
              {t("Contact me")}
            </SocialPill>
            <SocialPill url="https://linkedin.com/in/naiim-taefy-jimenez">
              <LinkedInIcon className="size-5" />
              LinkedIn
            </SocialPill>
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
