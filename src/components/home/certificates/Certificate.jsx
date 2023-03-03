import React, { useState, useContext, useEffect } from "react";
import { globalContext } from "../../../context/GlobalContext";
import {
  disableScroll,
  enableScroll,
} from "../../../utils/enableAndDisableScrollInBody";
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

  useEffect(() => {
    if (showingCertificate) disableScroll();
    else enableScroll();
  }, [showingCertificate]);

  return (
    <>
      <div
        role="button"
        onClick={() => openCertificate()}
        className="certificate-card"
      >
        <div className="certificate-img-container">
          <img src={image} alt={name} />
        </div>
        <p>{name}</p>
      </div>
      {showingCertificate && (
        <CertificateOverlay
          certificate={certificateToShow}
          setShowing={setShowingCertificate}
        />
      )}
    </>
  );
}
