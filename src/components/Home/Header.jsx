import React from "react";
import "./Header.css";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";

export default function Header() {
  return (
    <>
      <section className="hero-section container-fluid mt-4 ">
        <img
          src="/curveImage.png"
          className="img-fluid curveImage position-absolute"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className="custom-padding  p-md-5 p-sm-0 ">
          <div className="hero-inner d-flex flex-column flex-lg-row mt-0 align-items-center justify-content-between p-md-5 mx-md-4 p-sm-0 ">
            <div className="hero-info   text-md-start text-sm-center mb-4 mb-md-0 px-2">
              <span className="pill">Never stop learning</span>
              <h3 className="hero-title mt-3">
                Empowering Your Tech Career Journey
               
              </h3>

              <p className="hero-sub  text-md-start w-100">
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

            {/* <div className="d-inline-flex hero-image position-relative bg-danger"> */}
              {/* Main girl image */}
              <img
                src="/lifestyle-business-people-using-laptop-computer-pink 1.png"
                alt="Smiling student holding a laptop"
                // fill
                className="main-img "

                // width= {400}
                // height= {400}
              />
            {/* </div> */}

            {/* Small right image */}

            <div className="d-inline-flex small-calender px-4 py-2">
              <Image
                src="/Group 9.png"
                alt="Small right"
                width={140}
                height={140}
                className="small-right"
              />
            </div>

            <div className="d-inline-flex align-items-center rounded-4 shadow-sm px-4 py-2 stats-card">
              <div className="me-3 d-flex align-items-center justify-content-center p-4 bg-info rounded-3 position-relative custom-img-div">
                <Image
                  src="/calendar-1.png"
                  alt="calendar"
                  // fill
                  height={40}
                  width={40}
                  // className="img-fluid "
                />
                {/* <SlCalender color="#fff" /> */}
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
