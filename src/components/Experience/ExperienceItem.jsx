import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ShowMore from "../ShowMore";
import LanguageSingle from "../LanguageSingle";
import ProgramSingle from "../ProgramSingle";

const ExperienceItem = ({
  title,
  company,
  description,
  more,
  date,
  languages,
  programs,
}) => {
  const currentScreenWidth = window.innerWidth;
  const [screenWidth, setScreenWidth] = useState(currentScreenWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767 && !screenWidth) {
        setScreenWidth(true);
      } else if (window.innerWidth >= 767 && screenWidth) {
        setScreenWidth(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <div className="relative mx-12 pb-10 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
      <div className="relative md:pb-12 md:col-span-2">
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
        <div className="relative flex items-center mt-4">
          {programs &&
            programs.map((program, index) => (
              <ProgramSingle
                key={`${index} ${program}`}
                program={program}
                index={index + 1}
                screenWidth={screenWidth}
              />
            ))}
        </div>
      </div>
      {/* // - DESCRIPTION */}
      <div className="flex flex-col gap-2 text-grayLightPortfolio dark:text-gray-300 md:col-span-3">
        {description}
        {more && more.props && <ShowMore moreInfo={more} />}
        {/* // - LANGUAGES */}
        <div className="relative pb-6 flex flex-wrap items-center">
          {languages &&
            languages.map((language, index) => (
              <LanguageSingle
                key={`${index} ${language}`}
                language={language}
                screenWidth={screenWidth}
              />
            ))}
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
