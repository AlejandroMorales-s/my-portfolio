import React from "react";
import ProfilePhoto from "../../ProfilePhoto";

export default function About() {
  return (
    <div id="about" className="container about">
      <h2 className="h2">About</h2>
      <div className="about-container">
        <ProfilePhoto />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi adipisci incidunt,
            voluptatum eaque assumenda dolores accusamus ex consequatur dolorem pariatur maiores
            itaque mollitia perferendis fuga distinctio labore reiciendis rerum illum. Consequuntur
            odit eius, cupiditate iure nam modi nemo quisquam unde necessitatibus voluptatum
            totam alias, labore dolore ea quod aut. Praesentium possimus eius accusamus similique
            voluptates provident velit in omnis porro!
          </p>
          <button type="button">Download CV</button>
        </div>
      </div>
    </div>
  );
}
