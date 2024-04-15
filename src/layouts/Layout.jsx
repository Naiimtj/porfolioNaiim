import { Outlet, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import me from "/public/me.png";

function App() {
  const location = useLocation();
  const [t] = useTranslation("translation");
  const currentURL = location.pathname;

  return (
    <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,45,117,0.5),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,45,117,0.5),rgba(255,255,255,0))]">
      <div className="grid grid-cols-5 justify-between items-center relative">
        {/* // - LOGO */}
        <>
          <Link to="/" className="flex justify-center items-center">
            <>
              <img
                className="h-5 md:h-7 lg:h-10 inline-block"
                src={me}
                alt="My picture"
              />
              <h1 className="text-gray-50 font-bold text-xs md:text-base lg:text-4xl ml-2 inline-block align-middle">
                Naiim Taefy Jimenez
              </h1>
            </>
          </Link>
        </>
        {/* // - PAGES, LOGIN/LOGOUT & PROFILE */}
          <nav className="text-right col-span-2 flex justify-end items-center">
            <Link
              className={`${
                currentURL === "/" ? "text-lilaPorfolio font-bold" : "text-grayPorfolio"
              } text-xs md:text-base lg:text-xl pr-4 hover:text-gray-300 transition duration-300`}
              to="/"
            >
              {t("Experiencia laboral")}
            </Link>
            <Link
              className={`${
                currentURL === "/movie"
                  ? "text-lilaPorfolio font-bold"
                  : "text-grayPorfolio"
              } text-xs md:text-base lg:text-xl pr-4 hover:text-gray-300 `}
              to="/movie"
            >
              {t("Proyectos")}
            </Link>
            <Link
              className={`${
                currentURL === "/tv" ? "text-lilaPorfolio font-bold" : "text-grayPorfolio"
              } text-xs md:text-base lg:text-xl pr-4 hover:text-gray-300 `}
              to="/tv"
            >
              {t("Sobre mí")}
            </Link>
          </nav>
      </div>
      <div className="z-49">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
