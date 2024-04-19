import PropTypes from "prop-types";

const LinkInline = ({ href, children }) => {
  return (
    <a
      href={href}
      role="link"
      className="inline-flex items-center text-lg font-medium text-violet-500 dark:text-violet-300 dark:hover:text-violet-300 hover:text-violet-700"
    >
      {children}
    </a>
  );
};

export default LinkInline;

LinkInline.defaultProps = {
  href: "",
  children: [],
};
LinkInline.propTypes = {
  href: PropTypes.string,
  children: PropTypes.array,
};
