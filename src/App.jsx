import { Routes, Route } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import WorkExperience from "./pages/WorkExperience";
import Projects from "./pages/Projects";
import NotFoundPage from "./pages/NoFoundPage";
import Footer from "./layouts/Footer";
import AboutMe from "./pages/AboutMe";

const Portfolio = () => (
  <div className="relative text-black dark:text-white">
    <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,45,117,0.5),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,45,117,0.5),rgba(255,255,255,0))]">
      <NavBar />
      <Routes>
        <Route index element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  </div>
);

export default Portfolio;
