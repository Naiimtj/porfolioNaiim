import { useState } from "react";
import ListProjects from "../../data/projects.json";
import ProjectItem from "./ProjectItem";

const Project = () => {
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
                <ProjectItem
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

export default Project;
