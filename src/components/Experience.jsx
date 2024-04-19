import ExperienceItem from "./ExperienceItem";

const EXPERIENCES = [
  {
    date: "Octubre 2022 - Actualmente...",
    title: "Full Stack Developer",
    company: "Seppelec",
    description:
      "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo. Soporte y mantenimiento de antiguos proyectos y servicios.",
    more: (
      <ul>
        <li>- Desarrollo multilingüe con I18N para amplia accesibilidad.</li>
        <li>- Enfoque en diseño UI/UX de estilo minimalista.</li>
        <li>
          - Diseño de tablas y gráficas (APEXCHARTS), con acciones dinámicas integradas.
        </li>
        <li>- Optimización de código para mayor eficiencia y rendimiento.</li>
        <li>
          - Coordinación con compañeros para resolver las solicitudes de los
          clientes.
        </li>
      </ul>
    ),
    languages: [
      "Git",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Python",
      "MongoDb",
      "NodeJs",
      "MySQL",
      "SQL",
      "HTML5",
      "CSS3",
      "Docker",
      "Debian",
      "Php",
    ],
    programs: [
      "Visual Studio Code",
      "Visual Studio",
      "VmWare",
      "Windows Server",
      "SQL Server",
    ],
  },
  {
    date: "Abril 2020 - Mayo 2022",
    title: "Project Manager",
    company: "Avyliti",
    description:
      "Responsable de creación de plataforma y buen funcionamiento de la misma. Soporte técnico y atención al cliente.",
    more: (
      <ul>
        <li>- Diseño web incluyendo UX y navegabilidad.</li>
        <li>- Pasarela de pago y sistema de cobro.</li>
        <li>- Gestión del contenido audiovisual.</li>
        <li>- Soporte técnico.</li>
      </ul>
    ),
    languages: ["Wordpress", "JavaScript", "HTML5", "CSS3", "Php", "SQL"],
    programs: [],
  },
  {
    date: "Marzo 2020 - Junio 2021",
    title: "Front End Developer",
    company: "Vahid Digital",
    description:
      "Apoyo en soporte técnico y creación de nuevos sitios webs.",
    more: (
      <ul>
        <li>- Diseño web incluyendo UX y navegabilidad.</li>
        <li>- Gestor de contenido.</li>
        <li>- Pasarela de pago y sistema de cobro.</li>
      </ul>
    ),
    languages: ["Wordpress", "JavaScript", "HTML5", "CSS3",],
    programs: [],
  },
];

const Experience = () => {
  return (
    <div>
      <ol className="relative mt-16">
        {EXPERIENCES.map((experience, index) => (
          <li className="" key={index}>
            <ExperienceItem {...experience} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
