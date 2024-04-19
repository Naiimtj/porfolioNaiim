import {
  GitHub,
  LinkedInIcon,
  MailIcon,
} from "../components/icons/SocialMedia";

export default function Footer() {
  return (
    <footer className="text-center dark:text-grayPortfolio text-black lg:text-left mx-6">
      <div className="flex items-center justify-center border-t-2 border-neutral-200 pt-4 lg:justify-center">
        {/* // - Social network icons container */}
        <div className="flex justify-center gap-1">
          <a
            href="mailto:naiim.tj@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
            className="dark:text-grayPortfolio text-black dark:hover:text-lilaPortfolio hover:text-lilaLightPortfolio"
          >
            <MailIcon />
          </a>
          <a
            href="https://linkedin.com/in/naiim-taefy-jimenez"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
            className="dark:text-grayPortfolio text-black dark:hover:text-lilaPortfolio hover:text-lilaLightPortfolio"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Naiimtj"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
            className="dark:text-grayPortfolio text-black dark:hover:text-lilaPortfolio hover:text-lilaLightPortfolio"
          >
            <GitHub />
          </a>
        </div>
      </div>
      {/* // - Copyright section*/}
      <div className="p-2 text-center">
        <span>© 2023 Copyright:</span>
        <a
          className="font-semibold dark:text-grayPortfolio text-black ml-2 dark:hover:text-lilaPortfolio hover:text-lilaLightPortfolio"
          href="https://github.com/Naiimtj"
        >
          Naiim Taefy
        </a>
      </div>
    </footer>
  );
}
