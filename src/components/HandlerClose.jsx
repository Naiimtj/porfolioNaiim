import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const HandlerClose = ({ setModal, children }) => {
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setModal(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setModal]);

  return <div ref={menuButtonRef}>{children}</div>;
};

export default HandlerClose;

HandlerClose.defaultProps = {
  setModal: () => {},
  children: {},
};
HandlerClose.propTypes = {
  setModal: PropTypes.func,
  children: PropTypes.object,
};
