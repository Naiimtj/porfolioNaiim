import SectionContainer from "./components/SectionContainer.jsx";
import Briefcase from "./components/icons/Briefcase.jsx";
import Layout from "./layouts/Layout.jsx";
// import AboutMe from "../components/AboutMe.jsx";
// import Briefcase from "../components/icons/Briefcase.jsx";
// import CodeIcon from "../components/icons/Code.jsx";
// import Experience from "../components/Experience.jsx";
// import ProfileCheck from "../components/icons/ProfileCheck.jsx";
// import Projects from "../components/Projects.jsx";
// import SectionContainer from "../components/SectionContainer.jsx";
// import Hero from "../components/Hero.jsx";

const Portfolio = () => (
  <Layout
    title="Porfolio de Naiim - Desarrollador y Programador Web con 15 años de experiencia"
    description="Contrata a midudev para crear tu aplicación web o móvil. Desarrollador Web y Creador de Contenido. Especializado en crear aplicaciones únicas."
  >
      <div className="space-y-24">
        <SectionContainer id="experiencia">
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
            <Briefcase className="size-8" />
            Experiencia laboral
          </h2>
          {/* <Experience /> */}
        </SectionContainer>

        {/* <SectionContainer id="proyectos">
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
            <CodeIcon className="size-7" />
            Proyectos
          </h2>
          <Projects />
        </SectionContainer>

        <SectionContainer id="sobre-mi">
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white">
            <ProfileCheck className="size-8" />
            Sobre mí
          </h2>
          <AboutMe />
        </SectionContainer> */}
      </div>
  </Layout>
);

export default Portfolio;
