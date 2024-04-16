import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";

const AboutMe = () => {
  const [t] = useTranslation("translation");
  return (
    <div>
      <PageTitle title={`${t("About Me")}`} />
    </div>
  );
};

export default AboutMe;
