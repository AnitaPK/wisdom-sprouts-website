"use client";

import React from "react";
import Image from "next/image";
import "./FormIntership.css";

// add college name
// passout year
const FormIntership = () => {
  return (
    <section className="job-form-wrapper">
      <div className="container my-3 custom-container-job-form">
        <div className="row align-items-center rounded shadow py-3">
          {/* Left Form Section */}
          <div className="col-md-6 col-12">
            <h3 className="custom-heading-job-form my-3 p-2">
              Apply for the Internship Program
            </h3>
            <p className="custom-para-job-form ">
              Ready to build real-world skills and land your dream tech role?
              Fill out this form and begin your journey with us.
            </p>

            <form>
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

              {/* Domain select (Select) */}
              <div className="mb-3">
                <select className="form-select custom-input">
                  <option>Select Domain</option>
                  <option>Java Fullstack</option>
                  <option>MERN Stack</option>
                  <option>Python Fullstack </option>
                </select>
              </div>

              {/* Intership Duration (Select) */}
              <div className="mb-3">
                <select className="form-select custom-input">
                  <option>Intership Duration</option>
                  <option>45 Days</option>
                  <option>90 Days / 3 Months</option>
                  <option>180 Days / 6 Months </option>
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

          {/* Right Image Section */}
          <div className="col-md-6 col-12 text-center">
            <Image
              src="/placements/JobForm.png"
              alt="Student"
              width={550}
              height={550}
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormIntership;
