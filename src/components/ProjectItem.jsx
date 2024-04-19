import { useState } from "react";
import LinkButton from "./LinkButton";
import Link from "./icons/Link";
import { GitHub } from "./icons/SocialMedia";
import Close from "./icons/Close";
import {
  Css,
  Debian,
  Docker,
  Git,
  Html,
  JavaScript,
  MongoDb,
  MySQL,
  NodeJs,
  Php,
  Python,
  React,
  Sql,
  TailwindCss,
  Vite,
} from "./icons/languages";
import { useTranslation } from "react-i18next";

const PROJECTS = [
  {
    title: "Reports",
    description:
      "Plataforma de reportes para plantas de fabricación. Creado desde cero con React, Node.js y Tailwind CSS.",
    image: "/projects/Home-Seppelec.webp",
    tags: [
      "Git",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Python",
      "MongoDb",
      "NodeJs",
      "MySQL",
      "SQL",
      "HTML5",
      "CSS3",
      "Docker",
      "Debian",
      "Php",
    ],
  },
  {
    title: "NexReel",
    description:
      "Plataforma gratuita de peliculas y series. Creada desde cero con React, Node.js y Tailwind CSS.",
    github: "https://github.com/Naiimtj/NexReel",
    image: "/projects/NexReel.webp",
    tags: [
      "Git",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "MongoDb",
      "NodeJs",
      "HTML5",
      "CSS3",
    ],
  },
];

const languageComponents = {
  JavaScript: JavaScript,
  React: React,
  Python: Python,
  MySQL: MySQL,
  SQL: Sql,
  Git: Git,
  Debian: Debian,
  Docker: Docker,
  HTML5: Html,
  MongoDb: MongoDb,
  NodeJs: NodeJs,
  Php: Php,
  "Tailwind CSS": TailwindCss,
  Vite: Vite,
  CSS3: Css,
};

const ProjectItem = () => {
  const [t] = useTranslation("translation");
  const [expandedImage, setExpandedImage] = useState(null);

  return (
    <div>
      <div className="relative flex flex-col gap-y-16">
        {PROJECTS.map(({ image, title, description, tags, link, github }) => (
          <article
            key={`Project ${title}`}
            className="flex flex-col md:flex-row space-x-0 space-y-8 group md:space-x-8 md:space-y-0"
          >
            <div className="w-full md:w-1/2">
              <div
                className={`flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl rounded-xl sm:rounded-xl  ${
                  expandedImage === image
                    ? "z-50 top-0 absolute bottom-auto right-auto left-0 pt-8 inset-x-8 backdrop-blur-md border border-white/10 rounded-lg"
                    : "overflow-clip md:group-hover:-translate-y-1 md:group-hover:shadow-2xl"
                }`}
              >
                {expandedImage === image ? (
                  <div className="absolute right-1 top-1 cursor-pointer md:col-start-2 md:col-span-4 sm:col-auto hover:text-lilaPortfolio">
                    <Close
                      className="inline-block align-middle"
                      size={24}
                      alt="Cerrar"
                      onClick={() => setExpandedImage(null)}
                    />
                  </div>
                ) : null}
                <img
                  alt="Recién llegado vs 5 años en Nueva Zelanda"
                  className={`object-cover object-top w-full h-56   ${
                    expandedImage === image
                      ? "md:h-full rounded-b-lg cursor-zoom-out"
                      : "sm:h-full md:scale-110 md:group-hover:scale-105 transition duration-500 cursor-zoom-in"
                  }`}
                  loading="lazy"
                  src={image}
                  onClick={() =>
                    expandedImage === image
                      ? setExpandedImage(null)
                      : setExpandedImage(image)
                  }
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:max-w-lg">
              <h3 className="text-2xl font-bold text-lilaLightPortfolio dark:text-lilaLightPortfolio">
                {title}
              </h3>
              <div className="flex flex-wrap mt-2">
                {/* // - LANGUAGES */}
                <div className="relative pb-6 flex items-center">
                  {tags &&
                    tags.map((language, index) => {
                      const LanguageComponent = languageComponents[language];
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      const [hover, setHover] = useState(null);
                      return (
                        <div
                          className="flex flex-col"
                          key={`${index} ${language}`}
                        >
                          {LanguageComponent && (
                            <LanguageComponent
                              className="size-9 hover:text-lilaLightPortfolio dark:hover:text-lilaPortfolio"
                              onMouseEnter={() => setHover(index + 1)}
                              onMouseLeave={() => setHover(null)}
                            />
                          )}
                          {hover ? (
                            <div
                              className={
                                "absolute bottom-0 text-lilaLightPortfolio dark:text-lilaPortfolio"
                              }
                            >
                              {language}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                </div>

                <div className="text-gray-700 dark:text-gray-400">
                  {description}
                </div>
                <footer className="flex items-end justify-start mt-4 gap-x-4">
                  {github && (
                    <LinkButton href={github}>
                      <GitHub className="size-6" />
                      {t("Code")}
                    </LinkButton>
                  )}
                  {link && (
                    <LinkButton href={link}>
                      <Link className="size-4" />
                      {t('Preview')}
                    </LinkButton>
                  )}
                </footer>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
