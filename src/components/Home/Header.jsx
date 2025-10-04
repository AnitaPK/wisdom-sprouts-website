import React from "react";
import "./Header.css";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <section className="hero-section container-fluid  mt-0 ">
        <div className="custom-padding">
          <div className="hero-inner d-flex flex-column flex-md-row align-items-center justify-content-between ms-5 mb-5">
            <div className="hero-info text-center text-md-start mb-4 mb-md-0">
              <span className="pill">Never stop learning</span>
              <h1 className="hero-title">
                Empowering Your <br /> Tech Career Journey
              </h1>

              <p className="hero-sub">
                Join our industry-aligned programs and achieve your career goals
              </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-3">
                <button className="btn custom-btn-orange ">
                  Explore Courses
                </button>
                <button className="btn btn-outline-custom ">
                  Get a free demo
                </button>
              </div>
            </div>

            <div className="d-inline-flex hero-image position-relative">
              {/* Main girl image */}
              <Image
                src="/lifestyle-business-people-using-laptop-computer-pink 1.png"
                alt="Girl"
                priority
                fill
                className="main-img"
                // width= {400}
    // height= {400}
              />
            </div>

            {/* Small right image */}

            <div className="d-inline-flex small-calender px-4 py-2">
              <Image
                src="/Group 9.png"
                alt="Small right"
                width={90}
                height={90}
                className="small-right"
              />
            </div>

            <div className="d-inline-flex align-items-center rounded-4 shadow-sm px-4 py-2 stats-card">
              <div className="me-3 d-flex align-items-center justify-content-center bg-info rounded-3 position-relative custom-img-div">
                <Image
                  src="/calendar-1.png"
                  alt="calendar"
                  fill
                  className="object-fit-contain"
                />
              </div>
              <div className="px-3">
                <p className="mb-0 fw-bold pOne">250k</p>
                <p className="mb-0 pTwo">Assisted Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
