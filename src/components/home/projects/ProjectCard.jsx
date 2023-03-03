import React, { useState } from "react";
import ProjectOpenInfo from "./ProjectOpenInfo";
import returnTechIcon from "../../../utils/returnTechIcon";

export default function ProjectCard({ project }) {
  const [openProjectInfo, setOpenProjectInfo] = useState(false);
  const { name, images, description, technologies } = project.data;

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpenProjectInfo(true)}
        className="project-card"
      >
        <div className="project-card-img-container">
          <img src={images[0]} alt={name} />
        </div>
        <div className="project-card-info-container">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="project-card-technologies">
          {technologies.map((technology) => (
            <div
              key={technology}
              className={`${`${technology.toLowerCase()}-project-card`} project-card-technology`}
            >
              {returnTechIcon(technology)}
            </div>
          ))}
        </div>
      </div>
      {openProjectInfo && (
        <ProjectOpenInfo
          projectInfo={project.data}
          setOpenProjectInfo={setOpenProjectInfo}
          openProjectInfo={openProjectInfo}
        />
      )}
    </>
  );
}
