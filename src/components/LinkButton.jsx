import PropTypes from "prop-types";

const LinkButton = ({ href, children }) => {
  return (
    <a
      href={href}
      role="link"
      className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition duration-300 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-grayLightPortfolio dark:text-white dark:hover:bg-lilaLightPortfolio text-md hover:bg-violet-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
    >
      {children}
    </a>
  );
};

export default LinkButton;

LinkButton.defaultProps = {
  href: "",
  children: [],
};
LinkButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.array,
};
