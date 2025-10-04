"use client";
import React, { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CourseList.css";

const CoursesList = ({ AllCourses }) => {
  return (
    <div className="container my-5">
      <div className="container">
        <h2 className="text-center my-4 popular-heading">
          Popular Courses
        </h2>
      </div>

      {/* Courses */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {AllCourses.map((course, idx) => (
            <div className="col-md-4 col-12 " key={idx}>
              <div className="course-card shadow-sm">
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
                  <p className="small my-0" style={{ color: "#777795" }}>
                    30-45 Days
                  </p>
                  <h5
                    className="fw-bold my-0"
                    style={{ color: "#0B7077", fontSize: "16px" }}
                  >
                    {course.title}
                  </h5>
                  <p className="courseDescription my-0">{course.description}</p>
                  <button className="btn btn-enroll mt-2">Enroll Now →</button>
                   <Link href={`/courses/${course.id}`} className="btn btn-enroll mt-2">View More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
