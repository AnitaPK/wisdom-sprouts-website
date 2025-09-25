import React from 'react'
import './WhoWeAre.css'
import Image from 'next/image'
const WhoWeAre = () => {
  return (
    <section className='custom-section'>
      <div className="container">
        <span class="badge rounded-pill custom-green-badge">Who We Are</span>
      </div>
      <div className="container py-5">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="custom-left-content">
                    Empowering Careers with Practical Learning & Real Results Since 2014
                </div>
            </div>
            <div className="col col-md-6">
                <div className="custom-right-content">
                    A joint venture of Voracii Wisdom Solutions Pvt. Ltd. and ScaleFull Technologies 
                    LLP, we’re proud partners of MongoDB and IBM — a testament to our technical 
                    excellence and industry relevance.
                </div>
            </div>
        </div>
      </div>

      <div className="container">
        {/* Stats Section */}
        <div className="card statsCard mb-5">
          <div className="card-body">
            <div className="row text-center">
              <div className="col-md-4 border-end border-white py-3">
                <p className="statsLabel">TRAINED STUDENTS</p>
                <h2 className="statsNumber">7,000+</h2>
              </div>
              <div className="col-md-4 border-end border-white py-3">
                <p className="statsLabel">COLLEGE PARTNERSHIPS</p>
                <h2 className="statsNumber">35+</h2>
              </div>
              <div className="col-md-4 py-3">
                <p className="statsLabel">CORPORATE CLIENTS</p>
                <h2 className="statsNumber">15+</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Hiring Partners Section */}
        <div className="text-center mb-4">
          <h2 className="sectionTitle">Our Hiring Partners</h2>
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

export default WhoWeAre
