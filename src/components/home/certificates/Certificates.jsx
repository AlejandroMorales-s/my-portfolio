import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "../../../context/GlobalContext";
import Certificate from "./Certificate";

export default function Certificates() {
  const { certificates } = useContext(globalContext);

  const certificatesMobile = [];

  for (let index = 0; index < 3; index += 1) {
    certificatesMobile.push(certificates[index]);
  }
  return (
    <div id="certificates" className="certificates container">
      <h2 className="h2">Certificates</h2>
      <div className="certificates-container">
        {certificates?.map((certificate) => {
          if (
            certificate.id === "VV0fD2Y3wyYDyaYnjGPq" ||
            certificate.id === "RFsBqNIghGRqtSEgLCUb" ||
            certificate.id === "iu3AK8BEhiHpqHbOUXOE"
          ) {
            return <Certificate key={certificate.id} cert={certificate} />;
          }
        })}
      </div>
      <Link className="certificates-button" to="/certificates">
        <button type="button">See all</button>
      </Link>
    </div>
  );
}
