"use client";
import React, { useState } from 'react';
import './PopularCourses.css';

export default function PopularCourses() {
  const [showAll, setShowAll] = useState(false);

  const categories = [
    {
      title: 'Featured Courses',
      courses: [
        {
          title: 'Product Management Basic - Course',
          students: 40,
          img: 'https://via.placeholder.com/400x200.png?text=Product+Management',
          description: 'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
        },
        {
          title: 'BM Data Science Professional Certificate',
          students: 11,
          img: 'https://via.placeholder.com/400x200.png?text=Data+Science',
          description: 'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
        },
        {
          title: 'The Science of Well-Being',
          students: 234,
          img: 'https://via.placeholder.com/400x200.png?text=Well+Being',
          description: 'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
        },
      ],
    },
    {
      title: 'Full Stack Web Development Courses',
      courses: [
        {
          title: 'Product Management Basic - Course',
          students: 40,
          img: 'https://via.placeholder.com/400x200.png?text=Product+Management',
          description: 'Learn full stack development from scratch with industry experts.',
        },
        {
          title: 'BM Data Science Professional Certificate',
          students: 11,
          img: 'https://via.placeholder.com/400x200.png?text=Data+Science',
          description: 'Build scalable apps and APIs with Node.js, React, and MongoDB.',
        },
        {
          title: 'The Science of Well-Being',
          students: 234,
          img: 'https://via.placeholder.com/400x200.png?text=Well+Being',
          description: 'A refreshing take on balancing career and personal growth.',
        },
      ],
    },
    {
      title: 'Essential Programming',
      courses: [
        {
          title: 'Product Management Basic - Course',
          students: 40,
          img: 'https://via.placeholder.com/400x200.png?text=Product+Management',
          description: 'Master essential programming languages like Python, Java, and C++.',
        },
        {
          title: 'BM Data Science Professional Certificate',
          students: 11,
          img: 'https://via.placeholder.com/400x200.png?text=Data+Science',
          description: 'Learn algorithms, data structures, and problem solving skills.',
        },
        {
          title: 'The Science of Well-Being',
          students: 234,
          img: 'https://via.placeholder.com/400x200.png?text=Well+Being',
          description: 'Enhance focus and productivity while coding.',
        },
      ],
    },
  ];

  return (
    <div className="container popular-section">
      <h2 className="popular-heading">Popular Courses</h2>


      <div className="d-flex gap-3 justify-content-center mb-4 flex-wrap">
        <button className="filter-btn active">Featured Courses</button>
        <button className="filter-btn">Full Stack Web Development Courses</button>
        <button className="filter-btn">Essential Programming</button>
      </div>

      {!showAll && (
        <>
          <div className="row g-4">
            {categories[0].courses.map((course, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <div className="card h-100 course-card">
                  <div className="card-image-wrapper">
                    <img src={course.img} alt={course.title} className="card-img-top " />
                    <span className="student-badge">+ {course.students} students</span>
                  </div>
                  <div className="card-body">
                    <p className="duration">30-45 Days</p>
                    <h5 className="course-title">{course.title}</h5>
                    <p className="course-description">{course.description}</p>
                    <button className="enroll-btn">Enroll Now →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="see-all-btn" onClick={() => setShowAll(true)}>See all →</button>
          </div>
        </>
      )}

      {showAll && (
        <>
          {categories.map((category, cIdx) => (
            <div key={cIdx} className="mb-5">
              <h3 className="category-heading">{category.title}</h3>
              <div className="row g-4">
                {category.courses.map((course, idx) => (
                  <div className="col-12 col-md-6 col-lg-4" key={idx}>
                    <div className="card h-100 course-card">
                      <div className="card-image-wrapper">
                        <img src={course.img} alt={course.title} className="card-img-top" />
                        <span className="student-badge">+ {course.students} students</span>
                      </div>
                      <div className="card-body">
                        <p className="duration">30-45 Days</p>
                        <h5 className="course-title">{course.title}</h5>
                        <p className="course-description">{course.description}</p>
                        <button className="enroll-btn">Enroll Now →</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

