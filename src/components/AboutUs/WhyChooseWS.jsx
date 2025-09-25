import React from 'react'
import './whyChooseWS.css'
import HighlightsGrid from './HighlightsGrid'
import Image from 'next/image'


const WhyChooseWS = () => {
  return (
    <section>
        <div className="container w-50 text-center my-5">
      <h2 className='heading-why-choose'>Why Thousands Choose Wisdom Sprouts for Tech Careers</h2>
      <p className='paragrapg-why-choose'>We’re not just a training institute — we’re your career-building partner.</p>
    </div>
      <HighlightsGrid />

      <div className="container mt-4">
                {/* Hiring Partners Section */}
                <div className="text-center mb-4">
                  <h2 className="sectionTitle">Our Academic Partners</h2>
                  <p className="sectionSubtitle">
                    We have been working with some Fortune 500+ recruiters
                  </p>
                </div>
        
                {/* Logos */}
                <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
                  <div className="logoWrapper">
                    <Image src="/logo.png" alt="Elastic" width={100} height={70} objectFit="contain" />
                  </div>
                  <div className="logoWrapper">
                    <Image src="/logo.png" alt="Freshworks" width={120} height={70} objectFit="contain" />
                  </div>
                  <div className="logoWrapper">
                    <Image src="/logo.png" alt="Coinbase" width={120} height={70} objectFit="contain" />
                  </div>
                  <div className="logoWrapper">
                    <Image src="/logo.png" alt="Classpass" width={120} height={70} objectFit="contain" />
                  </div>
                  <div className="logoWrapper">
                    <Image src="/logo.png" alt="Clearbit" width={100} height={70} objectFit="contain" />
                  </div>
                  <div className="logoWrapper">
                    <Image src="/logo.png" alt="Calendly" width={110} height={70} objectFit="contain" />
                  </div>
                </div>
      </div>
    </section>
  )
}

export default WhyChooseWS
