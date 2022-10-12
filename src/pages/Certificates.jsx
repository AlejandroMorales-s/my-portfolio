import React, { useContext } from "react";
import DocumentTitle from "react-document-title";
import Certificate from "../components/home/certificates/Certificate";
import { globalContext } from "../context/GlobalContext";

export default function Certificates() {
  const { certificates } = useContext(globalContext);
  return (
    <>
      <DocumentTitle title="Certificates" />
      <div className="certificates-page container">
        <h2 className="h2">Certificates</h2>
        <div className="certificates-page-container">
          {certificates?.map((certificate) => (
            <Certificate
              key={certificate.id}
              cert={certificate}
            />
          ))}
        </div>
      </div>
    </>
  );
}
