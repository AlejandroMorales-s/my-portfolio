import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function CertificateOverlay({ certificate, setShowing }) {
  const { image, name } = certificate.data;
  return (
    <div className="certificate-overlay">
      <div className="certificate-overlay-container">
        <div className="certificate-overlay-img-container">
          <img src={image} alt={name} />
        </div>
        <AiOutlineClose className="certificate-overlay-button certificate-overlay-button-icon" onClick={() => setShowing(false)} />
      </div>
    </div>
  );
}
