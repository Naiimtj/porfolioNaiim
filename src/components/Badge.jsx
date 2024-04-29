import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Badge = ({ children, txtAlt }) => {
  return (
    <Link
      to="https://linkedin.com/in/naiim-taefy-jimenez"
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center pt-2 items-center hover:scale-110 transition duration-300"
      alt={txtAlt}
    >
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E4B2FD_0%,#461DAA_50%,#E4B2FD_100%)]"></span>
        <div className="inline-flex items-center justify-center w-full px-3 py-1 text-base text-violet-800 font-semibold bg-violet-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap transform-gpu hover:scale-100 transition duration-300">
          {children}
        </div>
      </span>
    </Link>
  );
};

export default Badge;

Badge.defaultProps = {
  children: "",
  txtAlt: "",
};
Badge.propTypes = {
  children: PropTypes.string,
  txtAlt: PropTypes.string,
};
