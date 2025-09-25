"use client";

import React, { useEffect, useState } from "react";
import "./AlumniGrid.css";

const AlumniGrid = ({alumni}) => {
  const [visibleCount, setVisibleCount] = useState(4);

   const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4); // load 4 more each click
  };

  return (
    <div className="container py-5">
      <div className="row g-4 justify-content-center">
        {alumni.slice(0, visibleCount).map((person) => (
          <div className="col-md-3 col-sm-6 d-flex justify-content-center" key={person.id} style={{ marginBottom: "60px" }}>
            <div className="card shadow-lg border-0 text-center p-3 h-100 custom-card">
              <img
                src={person.image}
                alt={person.name}
                className="rounded mx-auto custom-image"
              />
              <div className="card-body">
                <h6 className="fw-bold">{person.name.toUpperCase()}</h6>
                <p className="text-muted mb-1">{person.designation}</p>
                <div className="d-flex justify-content-center align-items-center mt-2">
                  <img
                    src={person.companyLogo}
                    alt={person.company}
                    style={{ width: "90px", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < alumni.length && (
        <div className="text-center mt-4">
          <button
            className="btn btn-danger px-4 py-2 rounded-pill"
            onClick={handleViewMore}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default AlumniGrid;
