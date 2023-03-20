import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMobile,
  AiOutlineDesktop,
} from "react-icons/ai";
import { BsTablet, BsLaptop } from "react-icons/bs";
import returnTechIcon from "../../../utils/returnTechIcon";

export default function ProjectOpenInfo({ projectInfo, setOpenProjectInfo }) {
  const {
    name,
    images,
    info,
    functions,
    repoLink,
    siteLink,
    devices,
    technologies,
  } = projectInfo;

  const devicesIcons = {
    mobile: <AiOutlineMobile className="device-supported-icon" />,
    tablet: <BsTablet className="device-supported-icon" />,
    laptop: <BsLaptop className="device-supported-icon" />,
    desktop: <AiOutlineDesktop className="device-supported-icon" />,
  };

  const [closingPopup, setClosingPopup] = useState(false);

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
          <div className="project-image-container">
            <img srcSet={images[0]} alt={name} />
          </div>
        </div>
        <div className="info-container">
          <div className="devices-supported">
            <h3>Devices supported</h3>
            <div className="devices-supported-container">
              {devices.map((device) => {
                const deviceCapitalized =
                  device.charAt(0).toUpperCase() + device.slice(1);

                return (
                  <div className="device-supported-container" key={device}>
                    <p>{deviceCapitalized}</p>
                    {devicesIcons[device]}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="project-info-technologies">
            <h3>Tech stack</h3>
            <div className="project-info-technologies-container">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className={`${`${technology.toLowerCase()}-project-card`} project-card-technology`}
                >
                  <p
                    className={`${technology.toLowerCase()} project-card-tech-name`}
                  >
                    {technology}
                  </p>
                  {returnTechIcon(technology)}
                </div>
              ))}
            </div>
          </div>
          <div className="description-container">
            <h3>Description</h3>
            <p>{info}</p>
          </div>
          <div className="functionalities-container">
            {functions && (
              <>
                <h3>Functionalities</h3>
                <ul className="functionalities-list">
                  {functions.map((element) => (
                    <li key={element}>{element}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
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
