import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeaderHire.css";
import Image from "next/image"

const HeaderHire = () => {
  return (
   <section className="connect-section">
      <div className="container w-75">
        <div className="row align-items-center">
          {/* Left Side: Text + Button */}
          <div className="col-md-7">
            <h2 className="fw-bold connect-title">
              <span className="connect-highlight">Hire Industry-Ready Tech Talent </span> 
               Trained for Real-World Challenges
            </h2>
            <p className="mt-3 text-muted">
              Partner with Wisdom Sprouts to access a pipeline of skilled, project-ready candidates who are technically strong, professionally polished, and aligned with your business needs.
            </p>
            <button className="btn btn-connect mt-3">Connect Now</button>
          </div>

          {/* Right Side: Image */}
          <div className="col-md-5 text-center mt-4 mt-md-0">
            <Image
              src="/HireFromUs/HireFromUsHeader.png"
              alt="Connect Illustration"
              className="img-fluid"
              width={500}
              height={265}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderHire
