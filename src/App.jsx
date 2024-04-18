import { Routes, Route } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import NotFoundPage from "./pages/NoFoundPage";
import Footer from "./layouts/Footer";
import PageTitle from "./components/PageTitle";
import Home from "./pages/Home";

const App = () => (
  <div className="relative text-black dark:text-white">
    <PageTitle title="Portfolio Naiim Taefy Jimenez" />
    <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,45,117,0.5),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,45,117,0.5),rgba(255,255,255,0))]">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  </div>
);

export default App;
