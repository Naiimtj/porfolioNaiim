import ThemeSwitcher from "./ThemeToggle";
import SelectLanguage from "./SelectLanguage";

const NavMenu = () => {
  return (
    <>
      <ThemeSwitcher />
      <div className="md:mt-2 z-50">
        <SelectLanguage />
      </div>
    </>
  );
};

export default NavMenu;
