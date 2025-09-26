import React from 'react'
import './internship.css'
import Image from 'next/image'

const HeaderIntership = () => {
  return (
    <section className="intership-section py-5">
      <div className="container w-75">
        <div className="row align-items-center">
          {/* Left Side: Text + Button */}
          <div className="col-md-7">
            <h2 className="fw-bold intership-title">
                Launch Your Tech Career with <br />
              <span className="intership-highlight">Hands-On Internships</span>
            </h2>
            <p className="mt-3 text-muted">
              Real projects. Real mentorship. Real career outcomes.
            </p>
            <button className="btn btn-connect mt-3">Apply Now</button>
          </div>

          {/* Right Side: Image */}
          <div className="col-md-5 text-center mt-4 mt-md-0">
            <Image
              src="/intership/header.png"
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

export default HeaderIntership
