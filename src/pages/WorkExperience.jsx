import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";

const WorkExperience = () => {
  const [t] = useTranslation("translation");
  return (
    <div>
      <PageTitle title={`${t("Work Experience")}`} />
    </div>
  );
};

export default WorkExperience;
