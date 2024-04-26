import PropTypes from "prop-types";
import SocialPill from "./SocialPill";
import { GitHub } from "./icons/SocialMedia";
import LanguageSingle from "./LanguageSingle";
import Close from "./icons/Close";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LinkIcon from "./icons/LinkIcon";

const ImgProject = ({
  image,
  title,
  description,
  tags,
  link,
  github,
  setSomeExpandedImage,
  someExpandedImage,
}) => {
  const [t] = useTranslation("translation");
  const [expandedImage, setExpandedImage] = useState(null);
  const blurArticle =
    someExpandedImage && expandedImage === image ? "" : "blur-md";
  const handleImageClick = () => {
    setExpandedImage(image);
    setSomeExpandedImage(true);
  };

  const handleCoseImageClick = () => {
    setExpandedImage(null);
    setSomeExpandedImage(false);
  };

  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target) &&
        expandedImage === image
      ) {
        setExpandedImage(null);
        setSomeExpandedImage(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandedImage, image]);

  return (
    <div
      className={`flex flex-col md:flex-row ${
        someExpandedImage
          ? blurArticle
          : "space-x-0 space-y-8 group md:space-x-8 md:space-y-0"
      }`}
    >
      {/* // < LEFT */}
      <div className="w-full md:w-1/2">
        <div
          className={`flex flex-col items-center col-span-6 row-span-5 gap-8 shadow-xl rounded-xl ${
            expandedImage
              ? "z-50 md:top-1/4 absolute bottom-auto right-auto left-0 pt-8 backdrop-blur-md border border-white/10 rounded-lg"
              : "overflow-clip md:group-hover:-translate-y-1 md:group-hover:shadow-2xl"
          }`}
        >
          <div ref={menuButtonRef}>
            {expandedImage === image ? (
              <div className="absolute right-1 top-1 cursor-pointer md:col-start-2 md:col-span-4 sm:col-auto hover:text-lilaPortfolio">
                <Close
                  className="inline-block align-middle"
                  size={24}
                  alt={t("Close")}
                  onClick={handleCoseImageClick}
                />
              </div>
            ) : null}
            <img
              alt={`${t("Picture Project")} ${title}`}
              className={`object-top w-full h-56 ${
                expandedImage
                  ? "h-full object-contain rounded-b-lg cursor-zoom-out"
                  : `${
                      expandedImage
                        ? "h-full"
                        : "h-full object-cover md:scale-110 md:group-hover:scale-105 transition duration-500 cursor-zoom-in"
                    }`
              }`}
              loading="lazy"
              src={image}
              onClick={handleImageClick}
            />
          </div>
        </div>
      </div>
      {/* // < RIGHT */}
      <div
        className={`w-full md:w-1/2 md:max-w-lg ${
          expandedImage ? "blur-md" : ""
        }`}
      >
        <h3 className="text-2xl font-bold text-lilaLightPortfolio dark:text-lilaLightPortfolio">
          {title}
        </h3>
        <div className="flex flex-wrap mt-2">
          {/* // - LANGUAGES */}
          <div className="relative pb-6 flex flex-wrap items-center">
            {tags &&
              tags.map((language, index) => (
                <LanguageSingle
                  key={`${index} ${language}`}
                  language={language}
                />
              ))}
          </div>
          {/* // - BUTTONS */}
          <div className="text-gray-700 dark:text-gray-400">
            {t(description)}
          </div>
          <div className="flex items-end justify-start mt-4 gap-x-4">
            {!expandedImage && !someExpandedImage && github && (
              <SocialPill url={github}>
                <GitHub className="size-6" />
                GitHub
              </SocialPill>
            )}
            {!expandedImage && !someExpandedImage && link && (
              <SocialPill url={link}>
                <LinkIcon className="size-6" />
                {t("Preview")}
              </SocialPill>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgProject;

ImgProject.defaultProps = {
  image: "",
  title: "",
  description: "",
  tags: [],
  link: "",
  github: "",
  setSomeExpandedImage: () => {},
  someExpandedImage: false,
};
ImgProject.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  link: PropTypes.string,
  github: PropTypes.string,
  setSomeExpandedImage: PropTypes.func,
  someExpandedImage: PropTypes.bool,
};
