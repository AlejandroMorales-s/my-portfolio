import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import returnTechIcon from "../../../utils/returnTechIcon";

export default function ProjectOpenInfo({
  projectInfo,
  openProjectInfo,
  setOpenProjectInfo,
}) {
  const [closingPopup, setClosingPopup] = useState(false);
  const { name, images, info, functions, repoLink, siteLink, technologies } =
    projectInfo;

  return (
    <div
      className={`${
        closingPopup && "details-bg-animation-out"
      } project-details-bg`}
    >
      <div
        className={`${
          closingPopup && "details-container-animation-out"
        } project-details-container container`}
      >
        <div
          onClick={() => {
            setClosingPopup(true);
            setTimeout(() => {
              setOpenProjectInfo(false);
            }, 200);
          }}
          className="close-icon-container"
        >
          <AiOutlineClose className="close-icon" />
        </div>
        <h2 className="h2">{name}</h2>
        <div className="project-images-container">
          {/* <div className="project-images-icons-container">
          <AiOutlineLeft
            onClick={() => previousImage()}
            className="project-images-icon"
          />
        </div> */}
          <div className="project-image-container">
            <img
              // src={ProfilePhoto}
              srcSet={images[0]}
              alt={name}
            />
          </div>
          {/* <div className="project-images-icons-container">
          <AiOutlineRight
            // onClick={() => nextImage()}
            className="project-images-icon"
          />
        </div> */}
        </div>
        <div className="info-container">
          <div className="project-info-technologies">
            {technologies.map((technology) => (
              <div
                key={technology}
                className={`${`${technology.toLowerCase()}-project-card`} project-card-technology`}
              >
                <p>{technology}</p>
                {returnTechIcon(technology)}
              </div>
            ))}
          </div>
          <div className="info">
            <p>{info}</p>
          </div>
          {functions && (
            <>
              <h3>Funcionalidades disponibles:</h3>
              <ul className="functionalities-list">
                {functions.map((element) => (
                  <li key={element}>{element}</li>
                ))}
              </ul>
            </>
          )}
          <div className="project-buttons-container">
            <a href={repoLink} target="_blank" rel="noreferrer">
              <button type="button">Repositorio</button>
            </a>
            <a href={siteLink} target="_blank" rel="noreferrer">
              <button type="button">Ir al sitio</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
