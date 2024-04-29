import {
  Css,
  Debian,
  Docker,
  Git,
  Html,
  JavaScript,
  MongoDb,
  MySQL,
  NodeJs,
  Php,
  Python,
  React,
  Sql,
  TailwindCss,
  Vite,
} from "../assets/icons/languages";

const languageComponents = (language) => {
  const languageIcons = {
    JavaScript: JavaScript,
    React: React,
    Python: Python,
    MySQL: MySQL,
    SQL: Sql,
    Git: Git,
    Debian: Debian,
    Docker: Docker,
    HTML5: Html,
    MongoDb: MongoDb,
    NodeJs: NodeJs,
    Php: Php,
    "Tailwind CSS": TailwindCss,
    Vite: Vite,
    CSS3: Css,
  };

  return languageIcons[language] || "";
};

export default languageComponents;
