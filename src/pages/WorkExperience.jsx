import { useTranslation } from "react-i18next";

const WorkExperience = () => {
  const [t] = useTranslation("translation");
  return (
    <div>
      {t('SEccion de Experiencia')}
    </div>
  );
};

export default WorkExperience;
