"use client";

import React from "react";
import Image from "next/image";
import './JobForm.css'

const JobForm = () => {
  return (
    <section className="job-form-wrapper">
      <div className="container mt-3 custom-container-job-form">
        <div className="row align-items-center rounded shadow p-4">
          
          {/* Left Form Section */}
          <div className="col-md-6">
            <h3 className="fw-bold custom-heading-job-form">Get Your 1st Job</h3>
            <p className="custom-para-job-form ">
              Fill out the form to unlock job opportunities, resume reviews, and
              mock interview support tailored just for you.
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

  {/* Interested In (Select) */}
  <div className="mb-3">
    <select className="form-select custom-input">
      <option>Interested In</option>
      <option>Frontend Development</option>
      <option>Backend Development</option>
      <option>Fullstack Development</option>
    </select>
  </div>

  {/* Message or Brief Requirement */}
  <div className="mb-3">
    <input
      type="text"
      className="form-control custom-input"
      placeholder="Message or Brief Requirement"
    />
  </div>

  {/* Submit */}
  <button type="submit" className="btn btn-submit w-100">
    Request a Call Back
  </button>
</form>


          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center">
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

export default JobForm;
