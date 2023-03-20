import React from "react";
import ProfilePhoto from "../../ProfilePhoto";

export default function ProfileInfo() {
  return (
    <div className="header-info-container">
      <h2>Alejandro Morales</h2>
      <ProfilePhoto />
      <h2 className="job-title">Front-End Developer</h2>
    </div>
  );
}
