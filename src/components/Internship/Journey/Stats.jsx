import React from 'react'
import Image from 'next/image'
import './Stats.css'

const Stats = () => {
      const stats = [
        {
          icon: (
            <Image
              src="/placements/SVG_placement.png"
              width={30}
              height={30}
              alt=""
            />
          ),
          label: "90% Job-Ready in 4–6 Months",
        },
        {
          icon: (
            <Image
              src="/placements/SVG_placement.png"
              width={30}
              height={30}
              alt=""
            />
          ),
          label: " Multiple Job Calls Before Completion",
        },
        {
          icon: (
            <Image
              src="/placements/SVG_placement.png"
              width={30}
              height={30}
              alt=""
            />
          ),
          label: "Multiple job Roles Offered",
        },
        {
          icon: (
            <Image
              src="/placements/SVG_placement.png"
              width={30}
              height={30}
              alt=""
            />
          ),
          label: "Resume-Ready GitHub & Portfolio",
        },
      ];
  return (
<div className="container ">
      <div className="row mt-4">
        {stats.map((item, index) => (
          <div key={index} className="col-md-3 col-12 mb-4">
            <div className="container">
              <div className="custom-svg-placement mx-auto">
                {item.icon}
              </div>
              <h6 className="custom-label mx-auto mt-3">{item.label}</h6>
            </div>
          </div>
        ))}
      </div>
      </div>
  )
}

export default Stats
