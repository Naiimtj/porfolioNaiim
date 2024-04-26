import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import programComponents from "../utility/programComponents";
import HandlerClose from "./HandlerClose";

const ProgramSingle = ({ program, index, screenWidth }) => {
  const ProgramsComponent = programComponents(program);
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
        className="flex flex-col"
        onClick={() => setHover(hover ? null : index + 1)}
      >
        {ProgramsComponent && (
          <ProgramsComponent
            className={`size-9 hover:text-gray-500 dark:hover:text-gray-400 mb-6`}
            onMouseEnter={() => (!screenWidth ? setHover(index + 1) : null)}
            onMouseLeave={() => (!screenWidth ? setHover(null) : null)}
            alt={program}
          />
        )}
        {hover ? (
          <div className="absolute bottom-0 text-gray-500 dark:text-gray-400">
            {program}
          </div>
        ) : null}
      </div>
    </HandlerClose>
  );
};

export default ProgramSingle;

ProgramSingle.defaultProps = {
  program: "",
  index: 1,
  screenWidth: false,
};
ProgramSingle.propTypes = {
  program: PropTypes.string,
  index: PropTypes.number,
  screenWidth: PropTypes.bool,
};
