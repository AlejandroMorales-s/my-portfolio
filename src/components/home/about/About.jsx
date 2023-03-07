import React from "react";
import ProfilePhoto from "../../ProfilePhoto";
import { saveAs } from "file-saver";

export default function About() {
  const downloadPDF = () => {
    fetch("./CV.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "cv.pdf");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div id="about" className="container about">
      <h2 className="h2">About</h2>
      <div className="about-container">
        <ProfilePhoto />
        <div>
          <p>
            Soy un desarrollador de front-end con una gran pasión por el
            desarrollo de aplicaciones web interactivas y dinámicas. Me
            especializo en React y tengo experiencia desarrollando varios
            proyectos personales. Además, he trabajado en proyectos de equipo
            donde he aprendido mucho y he aportado mis habilidades técnicas para
            lograr un resultado de alta calidad. Me gusta mantenerme actualizado
            en las últimas tendencias y tecnologías en el campo del desarrollo
            de aplicaciones web para asegurarme de hacer mi trabajo lo mejor
            posible.
          </p>
          <button onClick={downloadPDF} type="button">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
