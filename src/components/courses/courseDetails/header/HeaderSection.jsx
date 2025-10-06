"use client"
import React, { useState } from "react";
import "./HeaderSection.css";
import ReactCountryFlag from "react-country-flag";
import StatsCards from "./StatsCardHeader";


const HeaderSection = () => {
     const [phone, setPhone] = useState("");
  
  return (
    <section className="intership-section pb-5">
      <div className="container">
        <div className="row ">
          {/* Left Side: Text + Button */}
          <div className="col-md-6">
            <div className="container connectSection">
              <h1 className="connectTitle">
                {" "}
                <span className="connectHighlight">
                  MERN Full Stack Web Development {" "}
                </span>
                Job Bootcamp with GenAI
              </h1>
              <p className="connectText">
                Choose MERN stack or Spring Boot and acquire expertise through
                practical application and real-world projects.
              </p>
              <div>
                <div className="container ms-0">
                  <span className="badge rounded-pill custom-green-badge me-2">
                    Placement assistance
                  </span>
                  <span className="badge rounded-pill custom-green-badge me-2">
                    AI-infused curriculum
                  </span>
                  <span className="badge rounded-pill custom-green-badge me-2">
                    1:1 mentorship
                  </span>
                  <span className="badge rounded-pill custom-green-badge me-2">
                    Faculty from MAANG
                  </span>
                </div>
                <StatsCards />
                <div>
            <button className="btn brochure-btn">Download Brochure</button>
</div>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-md-6 mt-3 mt-md-0">
            {/* <div className="col-12 col-lg-6 ps-5 "> */}
                      <div className="free-card ms-5">
                        <h3 className="free-card-title">
                          Book a free live webinar to know more
                          </h3>
                        <form>
                          {/* Name */}
                          <div className="mb-3">
                            <label className="form-label">Name *</label>
                            <input
                              type="text"
                              placeholder="ex: Livia Siphron"
                              className="form-control free-input"
                              required
                            />
                          </div>
            
                          {/* Email */}
                          <div className="mb-3">
                            <label className="form-label">Email *</label>
                            <input
                              type="email"
                              placeholder="ex: john@email.com"
                              className="form-control free-input"
                              required
                            />
                          </div>
            
                          {/* Phone */}
                          <div className="mb-3">
                  <label className="form-label">Phone Number*</label>
            
               <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#D2E6E4",
                      borderRadius: "28px",
                      padding: "10px 16px",
                      width: "100%",
                    }}
                  >
                    {/* Flag */}
                    <ReactCountryFlag
                      countryCode="IN"
                      svg
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        marginRight: "8px",
                      }}
                    />
            
                    {/* Country code */}
                    <span style={{ color: "white", fontSize: "16px", marginRight: "8px" }}>
                      +91
                    </span>
            
                    {/* Phone input */}
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        flex: 1,
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        color: "#fff",
                        fontSize: "16px",
                      }}
                      className="phone-input"
                    />
                  </div>
                {/* </div> */}
                          </div>
            
                          
            
                          {/* Button */}
                          <button type="submit" className="btn free-btn w-100">
                            Get My Free Consultation
                          </button>
                        </form>
                      </div>
                    </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
