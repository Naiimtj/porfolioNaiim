import { useState } from "react";
import ListProjects from "../data/projects.json";
import ImgProject from "./ImgProject";

const ProjectItem = () => {
  const [someExpandedImage, setSomeExpandedImage] = useState(false);
  const handleImageExpand = (expanded) => {
    setSomeExpandedImage(expanded ? true : false);
  };

  return (
    <div>
      <div className="relative flex flex-col gap-y-16">
        {ListProjects.map(
          ({ image, title, description, tags, link, github }) => {
            return (
              <div key={`Project ${title}`}>
                <ImgProject
                  image={image}
                  title={title}
                  description={description}
                  tags={tags}
                  link={link}
                  github={github}
                  setSomeExpandedImage={handleImageExpand}
                  someExpandedImage={someExpandedImage}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
