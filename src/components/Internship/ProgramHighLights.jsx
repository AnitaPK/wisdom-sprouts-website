import React from "react";
import "./Internship.css";

const ProgramHighLights = () => {
  const highlights = [
    {
      title: "Duration",
      subtitle: "30 Days to 6 Months",
      description:
        "Flexible program options to suit your availability — from quick upskilling to full project immersion.",
    },
    {
      title: "Modes",
      subtitle: "Online / Offline / Hybrid",
      description:
        "Learn from anywhere or join our centers — choose a format that fits your lifestyle.",
    },
    {
      title: "1-on-1 Mentoring",
      description:
        "Work closely with experienced developers and mentors for personalized guidance and feedback.",
    },
    {
      title: "Internship Letter & Project Certificate",
      description:
        "Receive official credentials backed by Wisdom Sprouts & Scalefull Technologies on completion.",
    },
    {
      title: "Resume & LinkedIn Optimization",
      description:
        "Boost your online presence and stand out to recruiters with personalized improvements.",
    },
    {
      title: "Real-World Projects",
      description:
        "Build apps, scripts, or tools used in real environments — not dummy assignments.",
    },
    {
      title: "100% Placement Support",
      description:
        "Access to job calls, mock interviews, soft skills training, and referral support.",
    },
  ];
  return (
    <section>
      <div className="container w-75 mx-auto mt-5 text-center ">
        <h2 className="fw-bold custom-text-color-green">Program Highlights</h2>
        <p className="mt-3 custom-text-color-green-small">
          Everything you need to transform from a learner to a working
          professional.
        </p>
      </div>
      <div className="container w-75">
        <div className="row g-3">
          {highlights.map((item, index) => (
            <div className="col-12" key={index}>
              <div className="card shadow-sm border-0 p-3 rounded-3 custom-card-program">
                <h5 className="fw-bold custom-heading">{item.title}</h5>
                {item.subtitle && (
                  <p className="text-muted mb-3 custom-subtitle">{item.subtitle}</p>
                )}
                <p className="mb-0 custom-paragraph">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighLights;
