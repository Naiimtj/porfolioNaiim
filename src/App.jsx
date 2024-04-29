import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBar from "./layouts/NavBar";
import NotFoundPage from "./pages/NoFoundPage";
import Footer from "./layouts/Footer";
import PageTitle from "./components/PageTitle";
import Home from "./pages/Home";

const App = () => {
  const [t] = useTranslation("translation");

  return (
    <div className="relative text-black dark:text-white">
      <PageTitle title={t("Portfolio Naiim Taefy Jiménez")} />
      <div className="top-0 bottom-0 w-full bg-gray-50 dark:bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,45,117,0.5),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,45,117,0.5),rgba(255,255,255,0))] px-6">
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
