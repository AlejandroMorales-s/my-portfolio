import React, { useState, useContext } from "react";
import { globalContext } from "../../../context/GlobalContext";
import CertificateOverlay from "./CertificateOverlay";

export default function Certificate({ cert }) {
  const [showingCertificate, setShowingCertificate] = useState(false);
  const [certificateToShow, setCertificateToShow] = useState();

  const { certificates } = useContext(globalContext);

  const { name, image } = cert.data;

  const openCertificate = () => {
    const certificate = certificates.find((item) => item.id === cert.id);
    setCertificateToShow(certificate);
    setShowingCertificate(true);
  };

  const showCertificate = () => openCertificate();

  const handleClick = (e) => { if (e.keyCode === 13) openCertificate(); };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={showCertificate}
        onKeyDown={(e) => handleClick(e)}
        className="certificate-card"
      >
        <div className="certificate-img-container">
          <img src={image} alt={name} />
        </div>
        <p>{name}</p>
      </div>
      {showingCertificate
        && (
          <CertificateOverlay
            certificate={certificateToShow}
            setShowing={setShowingCertificate}
          />
        )}
    </>
  );
}
