import { useState } from "react";
import PropTypes from "prop-types";
import languageComponents from "../utility/languageComponents";

const LanguageSingle = ({ language, index }) => {
  const LanguageComponent = languageComponents(language);
  const [hover, setHover] = useState(null);
  return (
    <div className="flex flex-col">
      {LanguageComponent && (
        <LanguageComponent
          className="size-9 hover:text-gray-500 dark:hover:text-gray-400"
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(null)}
        />
      )}
      {hover ? (
        <div className={"absolute bottom-0 text-gray-500 dark:text-gray-400"}>
          {language}
        </div>
      ) : null}
    </div>
  );
};

export default LanguageSingle;

LanguageSingle.defaultProps = {
  language: "",
  index: 1,
};
LanguageSingle.propTypes = {
  language: PropTypes.string,
  index: PropTypes.number,
};
