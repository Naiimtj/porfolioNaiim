import PropTypes from "prop-types";
import ThemeSwitcher from "./ThemeToggle";
import SelectLanguage from "./SelectLanguage";

const NavMenu = ({isMobileMenu}) => {
  return (
    <>
      <ThemeSwitcher />
      <div className="md:mt-2 z-50">
        <SelectLanguage isMobileMenu={isMobileMenu}/>
      </div>
    </>
  );
};

export default NavMenu;

NavMenu.defaultProps = {
  isMobileMenu: false,
};
NavMenu.propTypes = {
  isMobileMenu: PropTypes.bool,
};