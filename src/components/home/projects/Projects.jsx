import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "../../../context/GlobalContext";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { personalProjects } = useContext(globalContext);
  const { mobileView } = useContext(globalContext);

  const projectsMobile = [];

  for (let index = 0; index < 3; index += 1) {
    projectsMobile.push(personalProjects[index]);
  }
  return (
    <div id="projects" className="container projects">
      <h2 className="h2">Projects</h2>
      <div className="projects-cards-container">
        {mobileView
          ? projectsMobile?.map((project) => project !== undefined
          && (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))
          : personalProjects?.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
      </div>
      <Link className="projects-button" to="/projects">
        <button type="button">See all</button>
      </Link>
    </div>
  );
}
