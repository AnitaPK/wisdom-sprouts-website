import React from 'react'
import Image from 'next/image'
import './HeaderAbout.css'

const HeaderAbout = () => {
  return (
     <section className="container p-5 mb-5">
      <div className="row ">
        {/* Left Content */}
        <div className="col-md-7">
          <h3><span className="custom-text-color-orange fw-bold">Wisdom Sprouts</span>{" "}
          <span className="fw-bold custom-text-color-green">
           Providing the best opportunities to the students around the glob.
          </span></h3>
          <p className="mt-3 custom-text-color-green-small">
            Wisdom Sprouts is one of the fastest-growing Training and Career Development Platforms in India, 
            headquartered in Pune with a presence across various regions. Established in 2014, our mission has 
            been to empower students and professionals with practical, job-ready skills that create real-world 
            impact.
          </p>
          <button className="mt-3 px-5 py-2 rounded-pill custom-orange-button">
            Join us
          </button>
        </div>

        {/* Right Image */}
        <div className="col-md-5">
            <div className="right-imges">
          <div className="custom-white-container"></div>
          <div className="ImageOne">
            <Image src="/aboutUs/ImageOne.png" alt="ImageOne" width={300} height={200} />
          </div>
          <div className="ImageTwo">
            <Image src="/aboutUs/ImageTwo.png" alt="ImageTwo" width={300} height={200} />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderAbout
