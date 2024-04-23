import { useState } from "react";
import Link from "./icons/Link";
import { GitHub } from "./icons/SocialMedia";
import Close from "./icons/Close";
import { useTranslation } from "react-i18next";
import SocialPill from "./SocialPill";
import LanguageSingle from "./LanguageSingle";

const PROJECTS = [
  {
    title: "Reports",
    description:
      "Reporting platform for manufacturing plants. Built from scratch with React, Node.js and Tailwind CSS.",
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
      "Free platform for movies and series. Built from scratch with React, Node.js and Tailwind CSS.",
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
  {
    title: "ExciteBike Retro Project",
    description:
      "Recreation of the classic NES motocross game with new features, such as coin collecting and lives, all in a digital environment!",
    github: "https://github.com/IronHackNaiimTJ/ExciteBike_game_project",
    link: "https://excitebike-game-project.netlify.app/",
    image: "/projects/Excitebike.webp",
    tags: ["Git", "JavaScript", "HTML5", "CSS3"],
  },
];

const ProjectItem = () => {
  const [t] = useTranslation("translation");
  const [expandedImage, setExpandedImage] = useState(null);
  return (
    <div>
      <div className="relative flex flex-col gap-y-16">
        {PROJECTS.map(({ image, title, description, tags, link, github }) => {
          const blurArticle = expandedImage === image ? "" : "blur-md";
          return (
            <article
              key={`Project ${title}`}
              className={`flex flex-col md:flex-row  ${
                expandedImage
                  ? blurArticle
                  : "space-x-0 space-y-8 group md:space-x-8 md:space-y-0"
              }`}
            >
              {/* // < LEFT */}
              <div className="w-full md:w-1/2">
                <div
                  className={`flex flex-col items-center col-span-6 row-span-5 gap-8 shadow-xl rounded-xl sm:rounded-xl  ${
                    expandedImage === image
                      ? "z-50 top-1/4 absolute bottom-auto right-auto left-0 pt-8 backdrop-blur-md border border-white/10 rounded-lg"
                      : "overflow-clip md:group-hover:-translate-y-1 md:group-hover:shadow-2xl"
                  }`}
                >
                  {expandedImage === image ? (
                    <div className="absolute right-1 top-1 cursor-pointer md:col-start-2 md:col-span-4 sm:col-auto hover:text-lilaPortfolio">
                      <Close
                        className="inline-block align-middle"
                        size={24}
                        alt={t("Close")}
                        onClick={() => setExpandedImage(null)}
                      />
                    </div>
                  ) : null}
                  <img
                    alt={`${t("Picture Project")} ${title}`}
                    className={`object-cover object-top w-full h-56 ${
                      expandedImage === image
                        ? "md:h-full rounded-b-lg cursor-zoom-out"
                        : `${
                            expandedImage
                              ? "sm:h-full"
                              : "sm:h-full md:scale-110 md:group-hover:scale-105 transition duration-500 cursor-zoom-in"
                          }`
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
              {/* // < RIGHT */}
              <div
                className={`w-full md:w-1/2 md:max-w-lg ${
                  expandedImage === image ? "blur-md" : ""
                }`}
              >
                <h3 className="text-2xl font-bold text-lilaLightPortfolio dark:text-lilaLightPortfolio">
                  {title}
                </h3>
                <div className="flex flex-wrap mt-2">
                  {/* // - LANGUAGES */}
                  <div className="relative pb-6 flex items-center">
                    {tags &&
                      tags.map((language, index) => (
                        <LanguageSingle
                          key={`${index} ${language}`}
                          language={language}
                        />
                      ))}
                  </div>
                  {/* // - BUTTONS */}
                  <div className="text-gray-700 dark:text-gray-400">
                    {t(description)}
                  </div>
                  <footer className="flex items-end justify-start mt-4 gap-x-4">
                    {github && (
                      <SocialPill url={github}>
                        <GitHub className="size-6" />
                        GitHub
                      </SocialPill>
                    )}
                    {link && (
                      <SocialPill url={link}>
                        <Link className="size-6" />
                        {t("Preview")}
                      </SocialPill>
                    )}
                  </footer>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectItem;
