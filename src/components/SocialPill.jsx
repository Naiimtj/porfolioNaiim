import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SocialPill = ({ url, txtAlt, children }) => {
  return (
    <Link
      to={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition duration-300 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-grayLightPortfolio dark:text-white dark:hover:bg-lilaLightPortfolio text-md hover:bg-violet-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
      alt={txtAlt}
    >
      {children}
    </Link>
  );
};

export default SocialPill;

SocialPill.defaultProps = {
  url: "",
  txtAlt: "",
  children: [],
};
SocialPill.propTypes = {
  url: PropTypes.string,
  txtAlt: PropTypes.string,
  children: PropTypes.array,
};
