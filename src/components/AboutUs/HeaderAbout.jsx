import React from 'react'
import Image from 'next/image'
import './HeaderAbout.css'

const HeaderAbout = () => {
  return (
     <section className="container px-5 mb-5">
      <div className="row ">
        {/* Left Content */}
        <div className="col-md-7">
          <div className={`container connectSection`}>


      <h1 className="connectTitle"> <span className="connectHighlight"> Wisdom Sprouts </span>providing the best opportunities to the students around the glob.</h1>
      <p className="connectText">
Wisdom Sprouts is one of the fastest-growing Training and Career Development Platforms in India, headquartered in Pune with a presence across various regions. Established in 2014, our mission has been to empower students and professionals with practical, job-ready skills that create real-world impact.
      </p>
      <div>
      <button className="cutomButtonOrange">Get Started</button>
    </div>
    </div>
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
