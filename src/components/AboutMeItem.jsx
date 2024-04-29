import { useTranslation } from "react-i18next";

const AboutMeItem = () => {
  const [t] = useTranslation("translation");

  return (
    <div>
      <div className="relative flex flex-col gap-y-16 mb-20">
        <article className="flex flex-col md:items-center justify-center gap-8 text-grayLightPortfolio dark:text-grayPortfolio md:flex-row">
          <div className="[&>p]:mb-4 [&>p>strong]:text-lilaLightPortfolio dark:[&>p>strong]:text-lilaPortfolio [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
            <p>{t("My name is")} Naiim Taefy Jiménez.</p>
            <p>
              {t("I am currently")}{" "}
              <strong>{t("developing in a multinational")}</strong>.
            </p>
            <p>
              {t(
                "I merge technical skills with end-to-end design and maintenance. My experience in JavaScript (ES6) and React JS is combined with skills in"
              )}{" "}
              <strong>{t("project management and web design")}</strong>{" "}
              {t("to offer web solutions")}{" "}
              <strong>
                {t("intuitive and efficient, meeting the highest standards")}
              </strong>
              .
            </p>
            <p>
              {t("Some of my successes include")}{" "}
              <strong>
                {t(
                  "create a reporting platform in my role as Full Stack Developer at Seppelec for Cocacola factories"
                )}
              </strong>.
            </p>
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
