import React from "react";
import Arrow from "../../../assets/arrow.svg";

export default function HeaderMessage() {
  return (
    <div>
      <img className="header-message-arrow" alt="SVG arrow" srcSet={Arrow} />
      <h2 className="header-message-title">Contact me! (:</h2>
    </div>
  );
}
