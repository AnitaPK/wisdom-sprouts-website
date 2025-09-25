import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InternJourney.css";

const steps = [
  { number: 1, label: "Enroll" },
  { number: 2, label: "Train" },
  { number: 3, label: "Project" },
  { number: 4, label: "Interview" },
  { number: 5, label: "Job Offer" },
];

const InternJourney = () => {
  return (
    <div className="container w-75 my-5">
      <div className="journey-box p-4 rounded-4">
        <h5 className="text-white fw-bold mb-4">Where Our Interns End Up</h5>
        <hr />
        <div className="journey-line d-flex justify-content-between position-relative">
          {steps.map((step, index) => (
            <div key={index} className="text-center journey-step">
              <div className="circle">{step.number}</div>
              <div className="label">{step.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternJourney;
