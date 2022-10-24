import React from "react";
import { FaReact, FaSass, FaHtml5 } from "react-icons/fa";
import {
  SiTailwindcss, SiJavascript, SiFirebase, SiRedux,
} from "react-icons/si";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  const {
    name, images, description, technologies,
  } = project.data;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/project-details/${project.id}`)}
      onKeyDown={(e) => { if (e.keyCode === 13) navigate(`/project-details/${project.id}`); }}
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
          <div key={technology} className={`${`${technology.toLowerCase()}-project-card`} project-card-technology`}>
            {technology.toLowerCase() === "react" && <FaReact className="project-card-icon" />}
            {technology.toLowerCase() === "tailwind" && <SiTailwindcss className="project-card-icon" />}
            {technology.toLowerCase() === "firebase" && <SiFirebase className="project-card-icon" />}
            {technology.toLowerCase() === "javascript" && <SiJavascript className="project-card-icon" />}
            {technology.toLowerCase() === "sass" && <FaSass className="project-card-icon" />}
            {technology.toLowerCase() === "css" && <IoLogoCss3 className="project-card-icon" />}
            {technology.toLowerCase() === "node" && <IoLogoNodejs className="project-card-icon" />}
            {technology.toLowerCase() === "html" && <FaHtml5 className="project-card-icon" />}
            {technology.toLowerCase() === "redux-toolkit" && <SiRedux className="project-card-icon" />}
          </div>
        ))}
      </div>
    </div>
  );
}
