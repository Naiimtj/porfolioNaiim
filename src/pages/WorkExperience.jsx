import { useTranslation } from "react-i18next";
import Experience from "../components/Experience";
import Briefcase from "../components/icons/Briefcase";
import SectionContainer from "../components/SectionContainer";

const WorkExperience = () => {
  const [t] = useTranslation("translation");
  return (
    <SectionContainer id="experience">
      <h2
        className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"
      >
        <Briefcase className="size-8" />
        {t('Work Experience')}
      </h2>
      <Experience />
    </SectionContainer>
  );
};

export default WorkExperience;
