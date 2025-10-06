"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./FormIntership.css";

// add college name
// passout year
const FormIntership = () => {
const [selectedDomain, setSelectedDomain] = useState("");
  const [durations, setDurations] = useState([]);

  // Mapping domain → allowed durations
  const domainDurations = {
    "MERN Stack": ["45 Days", "90 Days / 3 Months", "180 Days / 6 Months"],
    "Java Fullstack": ["45 Days", "90 Days / 3 Months", "180 Days / 6 Months"],
    "Python Fullstack": ["45 Days", "90 Days / 3 Months", "180 Days / 6 Months"],
    "ML / AI": ["45 Days"],
    "Cloud Computing": ["45 Days"],
    "Cyber Security": ["45 Days"],
  };

  const handleDomainChange = (e) => {
    const domain = e.target.value;
    setSelectedDomain(domain);
    setDurations(domainDurations[domain] || []);
  };



  return (
    <section className="job-form-wrapper">
      <div className="container my-3 custom-container-job-form">
        <div className="row align-items-center rounded shadow py-3">
          {/* Left Form Section */}
          <div className="col-md-6 col-12 ">
            <div className="px-4">
            <h3 className="custom-heading-job-form my-2 ">
              Apply for the Internship Program
            </h3>
            <p className="custom-para-job-form ">
              Ready to build real-world skills and land your dream tech role?
              Fill out this form and begin your journey with us.
            </p>

            <form >
              {/* Full Name */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Full Name"
                />
              </div>

              {/* Email Address */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control custom-input"
                  placeholder="Email Address"
                />
              </div>

              {/* Mobile Number */}
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control custom-input"
                  placeholder="Mobile Number"
                />
              </div>

              {/* Domain select */}
      <div className="mb-3">
        <select
          className="form-select custom-input"
          value={selectedDomain}
          onChange={handleDomainChange}
        >
          <option value="">Select Domain</option>
          <option value="Java Fullstack">Java Fullstack</option>
          <option value="MERN Stack">MERN Stack</option>
          <option value="Python Fullstack">Python Fullstack</option>
          <option value="ML / AI">ML / AI</option>
          <option value="Cloud Computing">Cloud Computing</option>
          <option value="Cyber Security">Cyber Security</option>
        </select>
      </div>

      {/* Internship Duration */}
      <div className="mb-3">
        <select className="form-select custom-input" disabled={!durations.length}>
          <option>
            {durations.length ? "Select Internship Duration" : "Select Domain First"}
          </option>
          {durations.map((duration, index) => (
            <option key={index}>{duration}</option>
          ))}
        </select>
      </div>

              {/* Mode Of Intership (Select) */}
              <div className="mb-3">
                <select className="form-select custom-input">
                  <option>Mode Of Intership</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              </div>

              {/* Submit */}
              <button type="submit" className="btn btn-submit w-100 mb-3">
                Apply Now
              </button>
            </form>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 col-12 text-center">
            <Image
              src="/placements/JobForm.png"
              alt="Student"
              width={516}
              height={536}
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormIntership;
