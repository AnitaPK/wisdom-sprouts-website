import React from "react";
import "./InternshipPage.css";
import "./Eligibility.css";

const Eligibility = () => {
  const categories = ["BE/B.Tech", "BCA", "Career switchers", "IT aspirants"];
  return (
    <>
      <div className="container  mx-auto my-5 text-center">
        <h2 className="custom-text-color-green1">
          Eligibility: Who This Internship Is For
        </h2>
        <p className="custom-text-color-green-small">
          Open to freshers, graduates, and career changers from tech? and
          non-tech backgrounds.
        </p>
      </div>
      <div className="container w-75 mb-4">
        <div className="row ">
          {categories.map((category, index) => (
            <div key={index} className="col mb-4">
              <button className="custom-eligibily-button">{category}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Eligibility;
