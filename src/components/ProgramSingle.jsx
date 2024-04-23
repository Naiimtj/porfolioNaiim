import { useState } from "react";
import PropTypes from "prop-types";
import programComponents from "./programComponents";

const ProgramSingle = ({ program, index }) => {
  const ProgramsComponent = programComponents(program);
  const [hover, setHover] = useState(null);
  return (
    <div className="flex flex-col">
      {ProgramsComponent && (
        <ProgramsComponent
          className="size-9 hover:text-gray-500 dark:hover:text-gray-400"
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(null)}
        />
      )}
      {hover ? (
        <div className="absolute bottom-5 text-gray-500 dark:text-gray-400">
          {program}
        </div>
      ) : null}
    </div>
  );
};

export default ProgramSingle;

ProgramSingle.defaultProps = {
  program: "",
  index: 1,
};
ProgramSingle.propTypes = {
  program: PropTypes.string,
  index: PropTypes.number,
};
