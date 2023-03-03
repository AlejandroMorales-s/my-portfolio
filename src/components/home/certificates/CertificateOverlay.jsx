import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function CertificateOverlay({ certificate, setShowing }) {
  const [closingOverlay, setClosingOverlay] = useState(false);
  const { image, name } = certificate.data;
  return (
    <div
      className={`${
        closingOverlay && "certificate-overlay-closing"
      } certificate-overlay`}
    >
      <div
        className={`${
          closingOverlay && "certificate-overlay-container-closing"
        } certificate-overlay-container`}
      >
        <div className="certificate-overlay-img-container">
          <img src={image} alt={name} />
        </div>
        <AiOutlineClose
          className="certificate-overlay-button certificate-overlay-button-icon"
          onClick={() => {
            setClosingOverlay(true);
            setTimeout(() => {
              setShowing(false);
            }, 200);
          }}
        />
      </div>
    </div>
  );
}
