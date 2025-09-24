import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import Image from "next/image"

const ConnectSection = () => {
  return (
    <section className="connect-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Text + Button */}
          <div className="col-md-7">
            <h2 className="fw-bold connect-title">
              <span className="connect-highlight">Let’s Connect</span> And Build <br />
              Something Great Together
            </h2>
            <p className="mt-3 text-muted">
              Whether you’re a student, recruiter, or academic partner — we’re here 
              to help you take the next step.
            </p>
            <button className="btn btn-connect mt-3">Connect Now</button>
          </div>

          {/* Right Side: Image */}
          <div className="col-md-5 text-center mt-4 mt-md-0">
            <Image
              src="/contactus/ContactUs-First.png"
              alt="Connect Illustration"
              className="img-fluid"
              width={500}
              height={265}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
