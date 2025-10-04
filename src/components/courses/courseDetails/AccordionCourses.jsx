"use client";

import { useState } from "react";

export default function AccordionCourses({ categories }) {
  const [active, setActive] = useState(categories[0]?.id || "");

  const toggle = (id) => {
    setActive(active === id ? "" : id);
  };

  return (
    <div className="container py-5">
      <div className="accordion" id="courseAccordion">
        {categories.map((cat) => (
          <div key={cat.id} className="accordion-item custom-accordion">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${active === cat.id ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggle(cat.id)}
              >
                {cat.title}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                active === cat.id ? "show" : ""
              }`}
            >
              <div className="accordion-body">
                <ul>
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
  );
}
