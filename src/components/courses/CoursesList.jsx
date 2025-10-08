"use client";
import React, { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CourseList.css";
import "@/styles/utilities.css";

const CoursesList = ({ AllCourses }) => {
  return (
    <div className="container-fluid my-5 mx-0">
      {AllCourses.map((category, cIdx) => (
        <div className={`container-fluid my-3 py-5 ${cIdx % 2 === 1 ? 'section-bg-pattern' : ''}`} key={cIdx}>
          <h2 className="text-center my-5 popular-heading">{category.title}</h2>

          <div className="container mb-5">
            <div className="row g-4 justify-content-center">
              {category.courses.map((course, idx) => (
                <div className="col-md-4 col-12 " key={idx}>
                  <Link href={`/courses/${course.id}`} className="course-card shadow-sm d-block">
                    {/* Image */}
                    <div className="course-img-wrapper">
                      <img
                        src={course.img}
                        alt={course.title}
                        className="course-img"
                      />
                      <div className="students-wrapper">
                        <div className="avatars">
                          <span className="avatar bg-pink"></span>
                          <span className="avatar bg-purple"></span>
                          <span className="avatar bg-blue"></span>
                          <span className="avatar bg-yellow"></span>
                        </div>
                        <span className="students-count">
                          + {course.students} students
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="course-body px-3">
                      <p className="custom-text-days-card" >
                        30-45 Days
                      </p>
                      <h5
                        className="my-2 px-3"
                      >
                        {course.title}
                      </h5>
                      <p className="courseDescription my-3 px-3">{course.description}</p>
                      <button className="btn btn-enroll my-2" onClick={(e) => e.preventDefault()}>Enroll Now →</button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
