import {
  Css,
  Debian,
  Docker,
  FastApi,
  Git,
  Html,
  JavaScript,
  MongoDb,
  MySQL,
  NodeJs,
  Nuxt,
  Php,
  PostgreSql,
  Python,
  React,
  Sql,
  TailwindCss,
  Vite,
  Vue,
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
    Vue: Vue,
    FastApi: FastApi,
    PostgreSql: PostgreSql,
    Nuxt: Nuxt,
  };

  return languageIcons[language] || "";
};

export default languageComponents;
