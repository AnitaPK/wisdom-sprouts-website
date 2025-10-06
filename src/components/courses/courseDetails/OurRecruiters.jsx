import React from 'react'
import Image from "next/image";
import './OurRecruiters.css'

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
      <div className="container w-50">
        <h2 className="fw-bold custom-text-color-green">
          Our Hiring Partners
        </h2>
        <p className="mt-3 custom-text-color-green-small">
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
