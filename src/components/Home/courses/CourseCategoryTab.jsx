"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CourseCategoryTab.css";

const CoursesComponent = ({ categories }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container my-5">
      <h2 className="text-center my-4 popular-heading">Popular Courses</h2>

      {/* Tabs */}
      <ul className="nav nav-pills justify-content-center mb-5">
        {categories.map((category, index) => (
          <li className="nav-item" key={index}>
            <button
              className={`nav-link mx-2 ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {category.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Courses */}
      <div className="container">
      <div className="row g-4 justify-content-center">
        {categories[activeTab].courses.map((course, idx) => (
          <div className="col-md-4 col-12 " key={idx}>
            <div className="course-card shadow-sm">
              {/* Image */}
              <div className="course-img-wrapper">
                <img src={course.img} alt={course.title} className="course-img" />
                <div className="students-wrapper">
                  <div className="avatars">
                    <span className="avatar bg-pink"></span>
                    <span className="avatar bg-purple"></span>
                    <span className="avatar bg-blue"></span>
                    <span className="avatar bg-yellow"></span>
                  </div>
                  <span className="students-count">+ {course.students} students</span>
                </div>
              </div>

              {/* Content */}
              <div className="course-body px-3">
                <p className="small my-0" style={{color:"#777795"}}>30-45 Days</p>
                <h5 className="fw-bold my-0" style={{color:"#0B7077",fontSize:"16px"}}>{course.title}</h5>
                <p className="courseDescription my-0">{course.description}</p>
                <button className="btn btn-enroll mt-2">Enroll Now  →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* See all button */}
      <div className="text-center mt-5">
        <button className="btn btn-see-all">See all →</button>
      </div>
    </div>
  );
};

export default CoursesComponent;
