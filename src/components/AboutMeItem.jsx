// import { useTranslation } from "react-i18next";

const AboutMeItem = () => {
  // const [t] = useTranslation("translation");

  return (
    <div>
      <div className="relative flex flex-col gap-y-16 mb-20">
        <article className="flex flex-col items-center justify-center gap-8 text-grayLightPortfolio dark:text-grayPortfolio md:flex-row">
          <div className="[&>p]:mb-4 [&>p>strong]:text-lilaLightPortfolio dark:[&>p>strong]:text-lilaPortfolio [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
            <p>Me llamo Naiim Taefy Jimenez.</p>
            <p>
              Actualmente estoy{" "}
              <strong>desarrollando en una multinacional</strong>.
            </p>
            <p>
              Algunos de mis éxitos incluyen{" "}
              <strong>
                colaborar con CocaCola en una plataforma de reportes en sus
                fabricas en diferentes lugares del mundo
              </strong>
              .
            </p>
            <p>Sigo trabajando actualmente con ello en Seppelec.</p>
            {/* <p>
              Como creador de contenido,{" "}
              <strong>
                cuento con el canal de habla hispana más visto del mundo en la
                categoría de{" "}
                <em className="italic">Software & Game Development</em> en
                Twitch
              </strong>
              . Mi objetivo es mejorar la empleabilidad de la comunidad hispana
              y el acceso a contenido de calidad.
            </p> */}
          </div>
          <img
            width="200"
            height="200"
            src="/me.png"
            alt="Naiim Taefy"
            className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/10"
          />
        </article>
      </div>
    </div>
  );
};

export default AboutMeItem;
