import { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { ArrowDown, ArrowUp } from "../assets/icons";

const ShowMore = ({ moreInfo }) => {
  const [t] = useTranslation("translation");
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex flex-col">
      <button
        className="flex text-lg font-medium "
        onClick={() => setShowMore(!showMore)}
        alt={t("Button to display more information")}
      >
        <div className="flex items-center text-violet-500 dark:text-lilaPortfolio md:dark:hover:text-white md:hover:text-violet-700 fill-violet-500 dark:fill-lilaPortfolio md:dark:hover:fill-white md:hover:fill-violet-700 transition duration-300">
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
