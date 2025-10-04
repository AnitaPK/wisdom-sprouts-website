import React from "react";
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
    <div className="container my-5">
      <div className="journey-box p-4 rounded-4">
        <h5 className="journey-title">Where Our Interns End Up</h5>
        <hr className="journey-hr" />
        <div className="journey-line">
          {steps.map((step, index) => (
            <div key={index} className="journey-step">
              <div className="circle">{step.number}</div>
              <div className="label">{step.label}</div>
              {/* connector line after each step except last */}
              {index !== steps.length - 1 && <div className="connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternJourney;
