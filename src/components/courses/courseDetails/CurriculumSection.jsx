"use client";

import { useState } from "react";
import "./CurriculumSection.css"
import Image from "next/image";

export default function CurriculumSection({ categories }) {
  const [active, setActive] = useState(categories[0]?.id || "");

  const toggle = (id) => {
    setActive(active === id ? "" : id);
  };

  return (
    <section className="curriculamSection">
    <div className="container py-5">
      <div className="row g-4">
        {/* Left Section */}
        <div className="col-lg-4">
          <div className="left-card py-2 h-100 pt-3">
            <h5 className="my-5 mx-2 custom-left-heading px-3">Industry Oriented Curriculum</h5>

            <div className="info-box mb-3 d-flex align-items-center">
              <div className=" me-3">
                <Image src="/courses/curriculam/project.png" alt="" width={48} height={48} ></Image>
              </div>
              <div>
                <h6 className="mb-0 ">30+</h6>
                <p className="mb-0  small">Case Studies & Projects</p>
              </div>
            </div>

            <div className="info-box mb-3 d-flex align-items-center">
              <div className=" me-3">
                <Image src="/courses/curriculam/language.png" alt="" width={48} height={48} ></Image>
                
                </div>
              <div>
                <h6 className="mb-0 ">10+</h6>
                <p className="mb-0 ">Languages & Tools</p>
              </div>
            </div>

            <div className="info-box mb-4 d-flex align-items-center">
              <div className="icon me-3">
                <Image src="/courses/curriculam/duration.png" alt="" width={48} height={48} ></Image>
                
                </div>
              <div>
                <h6 className="mb-0 ">280+</h6>
                <p className="mb-0 ">Live Session Hours</p>
              </div>
            </div>

            <button className="btn brochure-btn " type="button">Download Brochure</button>
          </div>
        </div>

        {/* Right Section - Accordion */}
        <div className="col-lg-8">
          <div className="accordion" id="courseAccordion">
            {categories.map((cat) => (
              <div key={cat.id} className="accordion-item custom-accordion">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button d-flex align-items-center justify-content-between ${active === cat.id ? "" : "collapsed"}`}
                    type="button"
                    aria-expanded={active === cat.id}
                    aria-controls={`collapse-${cat.id}`}
                    onClick={() => toggle(cat.id)}
                  >
                    <span className="acc-title">{cat.title}</span>
                    <span className={`acc-caret ${active === cat.id ? "rotate" : ""}`}/>
                  </button>
                </h2>
                <div
                  id={`collapse-${cat.id}`}
                  className={`accordion-collapse collapse ${active === cat.id ? "show" : ""}`}
                >
                  <div className="accordion-body">
                    <ul className="topic-list">
                      {cat.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
