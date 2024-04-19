import { useTranslation } from "react-i18next";
import SectionContainer from "../components/SectionContainer";
import ProfileCheck from "../components/icons/ProfileCheck";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  const [t] = useTranslation("translation");
  return (
    <SectionContainer id="projects">
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <ProfileCheck className="size-8" />
        {t("Projects")}
      </h2>
      <ProjectItem />
    </SectionContainer>
  );
};

export default Projects;
