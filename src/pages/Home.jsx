import { useTranslation } from "react-i18next";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import SectionContainer from "../components/SectionContainer";
import Badge from "../components/Badge";
import { LinkedInIcon } from "../components/icons/SocialMedia";
import SocialPill from "../components/SocialPill";


const Home = () => {
  const [t] = useTranslation("translation");
  return (
    <div>
      SOY NAIIM TAEFY JIMENEZ
      <SectionContainer className="py-44 pb-32 flex flex-col gap-y-10">
        <article className="mb-10">
          <h1 className="mb-4 text-xl font-semibold">&lt;Badge /&gt;</h1>

          <Badge>{t('Disponible para trabajar')}</Badge>
        </article>

        <article className="mb-10">
          <h1 className="mb-4 text-xl font-semibold">&lt SocialPill /&gt;</h1>

          <div className="flex">
            <SocialPill url="https://linkedin.com/in/naiim-taefy-jimenez">
              <LinkedInIcon className="size-4 md:size-6" />
              LinkedIn
            </SocialPill>
          </div>
        </article>
      </SectionContainer>
      <WorkExperience />
      <Projects />
      <AboutMe />
    </div>
  );
};

export default Home;
