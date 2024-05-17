import { useTranslation } from "react-i18next";

const AboutMeItem = () => {
  const [t] = useTranslation("translation");

  return (
    <div>
      <div className="relative flex flex-col gap-y-16 mb-20">
        <article className="flex flex-col md:items-center justify-center gap-8 text-grayLightPortfolio dark:text-grayPortfolio md:flex-row">
        <div className="[&>p]:mb-4 [&>p>strong]:text-lilaLightPortfolio dark:[&>p>strong]:text-lilaPortfolio [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
          <p>{t("My name is")} Naiim Taefy Jiménez.</p>
          <p>{t(`I'm a person open to `)}<strong>{t(`collaboration and teamwork`)}</strong>. {t(`I have a strong focus on making products usable and intuitive for customers and users`)}.</p>
          <p>{t('I combine')} <strong>{t('technical skills')}</strong> {t('with')} <strong>{t('comprehensive design, evolutionary and maintenance capabilities')}</strong>.</p>
          <p>{t('Always meeting')} <strong>{t('high quality standards')}</strong>, {t('and always open to learn')}.</p>
          <p>{t("Currently, I am working in a")} <strong>{t("multinational company")}</strong>.</p>
          <p>{t("I merge")} <strong>{t('technical skills')}</strong> {t("with")} <strong>{t('end-to-end design and maintenance')}</strong>. {t('My expertise in')} <strong>{t('JavaScript (ES6) and React JS')}</strong> {t('is complemented by skills in')} <strong>{t('project management and web design')}</strong>, {t('delivering web solutions that are intuitive and efficient, meeting the highest standards')}.</p>
          <p>{t("Among my achievements is")} <strong>{t("the creation of a reporting platform during my role as Full Stack Developer at Seppelec for Coca-Cola factories")}</strong>.</p>
        </div>
          <img
            src="/me_natural.webp"
            alt="Naiim Taefy"
            className="order-1 object-cover md:w-60 w-40 h-full p-1 md:order-2 lg:p-2 lg:w-60 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/10"
          />
        </article>
      </div>
    </div>
  );
};

export default AboutMeItem;
