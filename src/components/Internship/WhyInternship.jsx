import React from "react";
import "./WhyInternship.css";

const reasonsLeft = [
  {
    number: "01",
    title: "Learn from Real Engineers, Not Just Trainers",
    desc: "Get mentored by developers with real industry experience.",
  },
  {
    number: "02",
    title: "Exposure to Real Tech Stacks",
    desc: "Use current tools and frameworks used by top companies.",
  },
  {
    number: "03",
    title: "Agile Sprints & Teamwork",
    desc: "Experience collaborative workflows like real IT teams.",
  },
];

const reasonsRight = [
  {
    number: "04",
    title: "Resume + LinkedIn Boosted",
    desc: "Stand out to recruiters with strong personal branding.",
  },
  {
    number: "05",
    title: "Get Job Calls Before the Program Ends",
    desc: "Many interns receive interview calls during their training itself.",
  },
  {
    number: "06",
    title: "Result-Driven, Not Theory-Heavy",
    desc: "Everything is designed to lead to actual job placement.",
  },
];

const WhyInternship = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold custom-text-color-green1">Why Choose This Internship?</h2>
        <p className="custom-text-color-green-small">
          It’s not just training. It’s transformation.
        </p>
      </div>

      <div className="row align-items-center">
        {/* Left reasons */}
        <div className="col-md-4">
          {reasonsLeft.map((item, index) => (
            <div className="reason-box mb-4 d-flex" key={index}>
              <h4 className="reason-number">{item.number}</h4>
              <div>
                <h6 className=" custom-title">{item.title}</h6>
                <p className="custom-descri">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center image */}
        <div className="col-md-4 text-center">
          <img
            src="/intership/userratingwithphoto.png"
            alt="Internship"
            className="img-fluid rounded-3 custom-image"
          />
        </div>

        {/* Right reasons */}
        <div className="col-md-4">
          {reasonsRight.map((item, index) => (
            <div className="reason-box mb-4 d-flex" key={index}>
              <h3 className="reason-number">{item.number}</h3>
              <div>
                <h6 className=" custom-title">{item.title}</h6>
                <p className="custom-descri">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyInternship;
