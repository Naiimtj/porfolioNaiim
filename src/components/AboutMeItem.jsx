import { useTranslation } from "react-i18next";

const AboutMeItem = () => {
  const [t] = useTranslation("translation");

  return (
    <div>
      <div className="relative flex flex-col gap-y-16 mb-20">
        <article className="flex flex-col items-center justify-center gap-8 text-grayLightPortfolio dark:text-grayPortfolio md:flex-row">
          <div className="[&>p]:mb-4 [&>p>strong]:text-lilaLightPortfolio dark:[&>p>strong]:text-lilaPortfolio [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
            <p>{t("My name is")} Naiim Taefy Jiménez.</p>
            <p>
              {t("I am currently")}{" "}
              <strong>{t("developing in a multinational")}</strong>.
            </p>
            <p>
              {t("Some of my successes include")}{" "}
              <strong>
                {t(
                  "collaborate with CocaCola on a reporting platform at its factories in different parts of the world"
                )}
              </strong>
              .
            </p>
            <p>{t("I am still working on it at Seppelec")}.</p>
          </div>
          <img
            src="/me.png"
            alt="Naiim Taefy"
            className="order-1 object-cover w-60 h-full p-1 md:order-2 lg:p-2 lg:w-60 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/10"
          />
        </article>
      </div>
    </div>
  );
};

export default AboutMeItem;
