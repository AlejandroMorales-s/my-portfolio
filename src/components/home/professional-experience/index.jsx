import React from "react";
import { jobsList } from "./config";

const ProfessionalExperience = () => {
  return (
    <div
      id="professional-experience"
      className="container professional-experience"
    >
      <h2 className="h2">Professional Experience</h2>

      <div className="jobs-container">
        {jobsList.map((job) => (
          <div key={job.id} className="job">
            <h3>{job.title}</h3>
            <a href={job.companyLink} className="p" target="_blank">
              {job.company}
            </a>
            <p className="p">{job.description}</p>
            <p className="p">{job.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperience;
