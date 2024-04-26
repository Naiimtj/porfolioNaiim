import PropTypes from "prop-types";

const SocialPill = ({ url, txtAlt, children }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      role="link"
      className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition duration-300 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-grayLightPortfolio dark:text-white dark:hover:bg-lilaLightPortfolio text-md hover:bg-violet-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
      alt={txtAlt}
    >
      {children}
    </a>
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
