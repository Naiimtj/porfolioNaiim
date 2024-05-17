import { useTranslation } from "react-i18next";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const [t] = useTranslation("translation");

  const EXPERIENCES = [
    {
      date: `Oct. 2022 - ${t("Currently")}...`,
      title: "Full Stack Developer",
      company: "Seppelec",
      description: `${t(
        "Responsible for the creation and development of the platform, both of its components and its functionalities. Support and maintenance of legacy projects."
      )}`,
      more: (
        <ul>
          <li>- {t("Creación de bases de datos y obtención de datos de PLCs")}.</li>
          <li>- {t("Automating backups using Docker environments with databases")}.</li>          
          <li>- {t("Focus on minimalist style UI/UX design")}.</li>
          <li>- {t("Multilingual development with I18N for broad accessibility")}.</li>
          <li>- {t("Design of tables and graphs (APEXCHARTS), with integrated dynamic actions")}.</li>
          <li>- {t("Code optimization for efficiency and performance")}.</li>
          <li>- {t("Coordination with colleagues to resolve customer request")}.</li>
          <li>- {t("Creation of documentation and user manual for customer")}.</li>
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
      date: `${t("Abr")}. 2020 - Jun. 2022`,
      title: "Project Manager",
      company: "Avyliti",
      description:
        `${t('Responsible for the creation of client portal, e-learning platform and public web. Technical support and customer service')}.`,
      more: (
        <ul>
          <li>- {t('Web design including UX and navigability')}.</li>
          <li>- {t('Customer journey implementation')}.</li>
          <li>- {t('Payment gateway and collection system')}.</li>
          <li>- {t('Audiovisual content management')}.</li>
          <li>- {t('Technical Support')}.</li>
          <li>- {t("Creation of documentation and user manual for customer")}.</li>
        </ul>
      ),
      languages: ["JavaScript", "HTML5", "CSS3", "Php", "SQL"],
      programs: ["Wordpress"],
    },
    {
      date: "Mar. 2020 - Jun. 2021",
      title: "Front End Developer",
      company: "Vahid Digital",
      description: `${t('Support in technical support and creation of new web sites')}.`,
      more: (
        <ul>
          <li>- {t('Web design including UX and navigability')}.</li>
          <li>- {t('Content manager')}.</li>
          <li>- {t('Payment gateway and collection system')}.</li>
        </ul>
      ),
      languages: ["JavaScript", "HTML5", "CSS3"],
      programs: ["Wordpress"],
    },
  ];
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
