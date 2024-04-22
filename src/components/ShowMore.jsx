import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ArrowDown from "./icons/ArrowDown";
import ArrowUp from "./icons/ArrowUp";

const ShowMore = ({ moreInfo }) => {
  const [t] = useTranslation("translation");
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex flex-col">
      <button
        className="flex text-lg font-medium "
        onClick={() => setShowMore(!showMore)}
      >
        <div className="flex items-center text-violet-500 dark:text-lilaPortfolio dark:hover:text-white hover:text-violet-700 fill-violet-500 dark:fill-lilaPortfolio dark:hover:fill-white hover:fill-violet-700 transition duration-300">
          {t("More")}...
          {!showMore ? <ArrowDown /> : <ArrowUp />}
        </div>
      </button>
      {showMore ? moreInfo : null}
    </div>
  );
};

export default ShowMore;

ShowMore.defaultProps = {
  moreInfo: {},
};
ShowMore.propTypes = {
  moreInfo: PropTypes.object,
};
