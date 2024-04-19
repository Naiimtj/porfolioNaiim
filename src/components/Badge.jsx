import PropTypes from "prop-types";

const Badge = ({ children }) => {
  return (
    <a
      href="https://linkedin.com/in/naiim-taefy-jimenez"
      target="_blank"
      rel="noopener noreferrer"
      role="link"
      className="flex justify-center pt-2 items-center hover:scale-110 transition duration-300"
    >
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C47FFA_0%,#461DAA_50%,#C47FFA_100%)]"></span>
        <div className="inline-flex items-center justify-center w-full px-3 py-1 text-base text-violet-800 font-semibold bg-violet-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap transform-gpu hover:scale-100 transition duration-300">
          {children}
        </div>
      </span>
    </a>
  );
};

export default Badge;

Badge.defaultProps = {
  children: "",
};
Badge.propTypes = {
  children: PropTypes.string,
};
