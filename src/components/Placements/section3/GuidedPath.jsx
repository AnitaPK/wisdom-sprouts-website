"use client";

import React from "react";
import './GuidedPath.css'
import Image from 'next/image'

const GuidedPath = () => {
  const steps = [
    { step: "/guidedPath/Group1.png", title: "Career Readiness Training" },
    { step: "/guidedPath/Group2.png", title: "Mock Interviews" },
    { step: "/guidedPath/Group3.png", title: "Aptitude + Technical Preparation" },
    { step: "/guidedPath/Group4.png", title: "Industry Mentorship" },
    { step: "/guidedPath/Group5.png", title: "Final Interviews with Companies" },
    { step: "/guidedPath/Group6.png", title: "Offer Letters" },
  ];

  return (
    <section>
    <div className="guided-section">
      
<div className="container text-center ">
        <h2 className="fw-bold custom-text-color-green">
          Your Guided Path—Every Step Designed For Success.
        </h2>
        <p className="mt-3 custom-text-color-green-small w-75 mx-auto">
         With consistently high placement rates, strong industry tie-ups, and
        students hired by top companies, our placement results are more than
        metrics—they’re milestones of transformation.</p>
      </div>

      <div className="container px-5 mt-3">
      <div className="row g-4 justify-content-center px-5">
        {steps.map((s, index) => (
          <div key={index} className="col-4 col-md-3">
            <div className="step-circle">
                <Image
                              src={s.step}
                              alt={s.title}
                              width={208}
                              height={200}
                              style={{ objectFit: "contain" }}
                            />
            </div>
            <h4 className="step-text">{s.title}</h4>
          </div>
        ))}
      </div>
      </div>
    </div>
    </section>
  );
};

export default GuidedPath;
