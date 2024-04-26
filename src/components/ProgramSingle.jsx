import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import programComponents from "../utility/programComponents";

const ProgramSingle = ({ program, index, screenWidth }) => {
  const ProgramsComponent = programComponents(program);
  const [hover, setHover] = useState(null);

  const menuButtonRef = useRef(null);
  // Add an event handler to close the menu when clicked out of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setHover(null);
      }
    };
    // Add the event handler to the document
    document.addEventListener("click", handleClickOutside);
    // Clearing the event handler when unmounting the component
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuButtonRef]);
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
    <div
      className="flex flex-col"
      onClick={() => setHover(hover ? null : index + 1)}
      ref={menuButtonRef}
    >
      {ProgramsComponent && (
        <ProgramsComponent
          className={`size-9 hover:text-gray-500 dark:hover:text-gray-400 mb-6`}
          onMouseEnter={() => (!screenWidth ? setHover(index + 1) : null)}
          onMouseLeave={() => (!screenWidth ? setHover(null) : null)}
        />
      )}
      {hover ? (
        <div className="absolute bottom-0 text-gray-500 dark:text-gray-400">
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
  screenWidth: false,
};
ProgramSingle.propTypes = {
  program: PropTypes.string,
  index: PropTypes.number,
  screenWidth: PropTypes.bool,
};
