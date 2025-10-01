"use client";
import {
  FaUserGraduate,
  FaBuilding,
  FaChartLine,
  FaRupeeSign,
} from "react-icons/fa";
import Image from "next/image";

const PlacementStats = () => {
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
      label: "70%+ Placement Rate",
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
      label: "1,200+ Students Placed to Date",
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
      label: "100+ Hiring Partners",
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
      label: "Salary Range ₹3–12 LPA",
    },
  ];

  return (
    <section className="container text-center py-5">
      <div className="container w-75">
        <h2 className="fw-bold custom-text-color-green">
          Our Numbers Reflect <br />
          Our Commitment To Your Career
        </h2>
        <p className="mt-3 custom-text-color-green-small">
          With consistently high placement rates, strong industry tie-ups, and
          students hired by top companies, our placement results are more than
          metrics—they’re milestones of transformation.
        </p>
      </div>
      <div className="container w-75">
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
    </section>
  );
};

export default PlacementStats;
