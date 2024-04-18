import { useTranslation } from "react-i18next";

const Projects = () => {
  const [t] = useTranslation("translation");
  return (
    <>
      {t('SECCION PROYECTOS')}
    </>
  );
};

export default Projects;
