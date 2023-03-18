import React from "react";
import profilePhoto from "../assets/headerPhoto.webp";

export default function ProfilePhoto() {
  return (
    <div className="header-profile-photo-container">
      <img src={profilePhoto} alt="" />
    </div>
  );
}
