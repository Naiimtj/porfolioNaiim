import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";

const Projects = () => {
  const [t] = useTranslation("translation");
  return (
    <>
      <PageTitle title={`${t("Projects")}`} />
    </>
  );
};

export default Projects;
