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
        <div className="certificate-overlay-buttons-container">
          <a target="_blank" href={image}>
            <button
              className="certificate-overlay-image-cropped-button"
              type="button"
            >
              Cropped? See it here
            </button>
          </a>
          <AiOutlineClose
            className="certificate-overlay-close-button"
            onClick={() => {
              setClosingOverlay(true);
              setTimeout(() => {
                setShowing(false);
              }, 200);
            }}
          />
        </div>
      </div>
    </div>
  );
}
