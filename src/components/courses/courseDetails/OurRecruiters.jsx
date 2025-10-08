import React from 'react'
import Image from "next/image";
import './OurRecruiters.css'
import '@/styles/typography.css'

const OurRecruiters = () => {
    const recruiters = [
        { name: "ClickUp", logo: "/logo.png" },
        { name: "DoorDash", logo: "/logo.png" },
        { name: "Coinbase", logo: "/logo.png" },
        { name: "Descript", logo: "/logo.png" },
        { name: "Clearbit", logo: "/logo.png" },
        { name: "Calendly", logo: "/logo.png" },
    ];
  return (
    <section className="container text-center pb-5">
      <div className="container ">
        <h2 className=" section-title">
        Our Recruiters
        </h2>
        <p className="mb-4 section-desc">
        We have been working with some Fortune 500+ recruiters
        </p>
      </div>
       <div className="partners-grid">
        {recruiters.map((partner, index) => (
          <div key={index} className="partner-item">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={40}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurRecruiters
