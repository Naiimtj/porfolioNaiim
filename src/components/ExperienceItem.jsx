import { useState } from "react";
import PropTypes from "prop-types";
import {
  JavaScript,
  React,
  Python,
  MySQL,
  Sql,
  Git,
  Debian,
  Docker,
  Html,
  MongoDb,
  NodeJs,
  Php,
  TailwindCss,
  Vite,
  Css,
} from "./icons/languages";
import {
  MacOS,
  SqlServer,
  VisualStudio,
  VisualStudioCode,
  VmWare,
  Windows,
  WindowsServer,
  Wordpress,
} from "./icons/programs";
import ShowMore from "./ShowMore";

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

const programComponents = {
  Windows: Windows,
  "Windows Server": WindowsServer,
  "Visual Studio Code": VisualStudioCode,
  "Visual Studio": VisualStudio,
  "SQL Server": SqlServer,
  "Mac OS": MacOS,
  VmWare: VmWare,
  Wordpress: Wordpress,
};

const ExperienceItem = ({
  title,
  company,
  description,
  more,
  date,
  languages,
  programs,
}) => {
  return (
    <div className="relative mx-12 pb-10 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
      <div className="relative pb-12 md:col-span-2">
        <span className="text-lilaLightPortfolio -left-[44px] absolute rounded-full text-5xl">
          &bull;
        </span>
        <h3 className="text-xl font-bold text-lilaLightPortfolio">{title}</h3>
        <h4 className="font-semibold text-xl text-grayLightPortfolio dark:text-white">
          {company}
        </h4>
        <time className="p-0 m-0 text-sm text-grayLightPortfolio/80 dark:text-white/80">
          {date}
        </time>
        {/* // - PROGRAMS */}
        <div className="flex items-center mt-4">
          {programs &&
            programs.map((program, index) => {
              const ProgramsComponent = programComponents[program];
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [hover, setHover] = useState(null);
              return (
                <div className="flex flex-col" key={`${index} ${program}`}>
                  {ProgramsComponent && (
                    <ProgramsComponent
                      className="size-9 hover:text-lilaLightPortfolio dark:hover:text-lilaPortfolio"
                      onMouseEnter={() => setHover(index + 1)}
                      onMouseLeave={() => setHover(null)}
                    />
                  )}
                  {hover ? (
                    <div className="absolute bottom-5 text-lilaLightPortfolio dark:text-lilaPortfolio">
                      {program}
                    </div>
                  ) : null}
                </div>
              );
            })}
        </div>
      </div>
      {/* // - DESCRIPTION */}
      <div className="flex flex-col gap-2 text-grayLightPortfolio dark:text-gray-300 md:col-span-3">
        {description}
        {more && more.props && <ShowMore moreInfo={more} />}
        {/* // - LANGUAGES */}
        <div className="relative pb-6 flex items-center">
          {languages &&
            languages.map((language, index) => {
              const LanguageComponent = languageComponents[language];
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [hover, setHover] = useState(null);
              return (
                <div className="flex flex-col" key={`${index} ${language}`}>
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
      </div>
    </div>
  );
};

export default ExperienceItem;

ExperienceItem.defaultProps = {
  title: "",
  company: "",
  description: "",
  more: {},
  date: "",
  languages: [],
  programs: [],
};
ExperienceItem.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  description: PropTypes.string,
  more: PropTypes.object,
  date: PropTypes.string,
  languages: PropTypes.array,
  programs: PropTypes.array,
};
