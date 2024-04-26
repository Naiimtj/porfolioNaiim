import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import languageComponents from "../utility/languageComponents";
import HandlerClose from "./HandlerClose";

const LanguageSingle = ({ language, index, screenWidth }) => {
  const LanguageComponent = languageComponents(language);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setHover(null); // Here the menu closes when you scroll down
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HandlerClose setModal={setHover}>
      <div
        className="relative flex flex-col"
        onClick={() => setHover(hover ? null : index + 1)}
      >
        {LanguageComponent && (
          <LanguageComponent
            className={`size-9 hover:text-gray-500 dark:hover:text-gray-400 mb-5`}
            onMouseEnter={() => (!screenWidth ? setHover(index + 1) : null)}
            onMouseLeave={() => (!screenWidth ? setHover(null) : null)}
          />
        )}
        {hover ? (
          <div
            className={`absolute bottom-0 text-gray-500 dark:text-gray-400 w-24`}
          >
            {language}
          </div>
        ) : null}
      </div>
    </HandlerClose>
  );
};

export default LanguageSingle;

LanguageSingle.defaultProps = {
  language: "",
  index: 1,
  screenWidth: false,
};
LanguageSingle.propTypes = {
  language: PropTypes.string,
  index: PropTypes.number,
  screenWidth: PropTypes.bool,
};
