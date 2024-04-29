import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Code } from "../assets/icons";

function NotFoundPage() {
  const [t] = useTranslation("translation");
  return (
    <div className="min-h-screen flex flex-col gap-6 items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl text-gray-700 dark:text-grayPortfolio font-bold">
          404
        </h1>
        <p className="text-2xl text-grayLightPortfolio dark:text-grayPortfolio">
          {t("Sorry, Page not found")}
        </p>
      </div>
      <Link
        to="/"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition duration-300 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-grayLightPortfolio dark:text-white dark:hover:bg-lilaLightPortfolio text-md hover:bg-violet-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
        alt={t("Button back home")}
      >
        <Code className="size-6" />
        {t("Back Home")}
      </Link>
    </div>
  );
}

export default NotFoundPage;
