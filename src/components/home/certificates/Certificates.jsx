import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "../../../context/GlobalContext";
import Certificate from "./Certificate";

export default function Certificates() {
  const { certificates } = useContext(globalContext);
  const { mobileView } = useContext(globalContext);

  const certificatesMobile = [];

  for (let index = 0; index < 3; index += 1) {
    certificatesMobile.push(certificates[index]);
  }
  return (
    <div id="certificates" className="certificates container">
      <h2 className="h2">Certificates</h2>
      <div className="certificates-container">
        {mobileView
          ? certificatesMobile?.map((certificate) => certificate !== undefined
            && (
              <Certificate
                key={certificate.id}
                cert={certificate}
              />
            ))
          : certificates?.map((certificate) => (
            <Certificate
              key={certificate.id}
              cert={certificate}
            />
          ))}
      </div>
      <Link className="certificates-button" to="/certificates">
        <button type="button">See all</button>
      </Link>
    </div>
  );
}
