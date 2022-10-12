import React, { useContext } from "react";
import DocumentTitle from "react-document-title";
import ProjectCard from "../components/home/projects/ProjectCard";
import { globalContext } from "../context/GlobalContext";

export default function Projects() {
  const { personalProjects } = useContext(globalContext);
  return (
    <>
      <DocumentTitle title="Projects" />
      <div className="projects-page container">
        <h2 className="h2">Projects</h2>
        <div className="projects-page-container">
          {personalProjects?.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </>
  );
}
