import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const [t] = useTranslation("translation");
  return (
    <div>
      {t('SECCION SOBRE MI')}
    </div>
  );
};

export default AboutMe;
