"use client";
import React,{useState} from "react";
import "./FreeConsultation.css";
import PhoneInput from "react-phone-input-2";
import ReactCountryFlag from "react-country-flag";

export default function FreeConsultation() {
   const [phone, setPhone] = useState("");
  return (
    <div className="container-fluid free-section px-3 mb-5">
      <div className="container">
      <div className="row align-items-center  ">
        {/* Left Content */}
        <div className="col-12 col-lg-6 mb-3 mb-sm-0 mb-lg-0">
          <h2 className="free-heading mt-0">
            Start Your Tech Journey with a Free Expert Session
          </h2>
          <p className="free-subtext">
            Get personalized advice on the best training, technology stack, and
            learning plan
          </p>
          <ul className="free-list  px-0">
            <li>Discuss your goals, career path, or tech interests</li>
            <li>
              Get guidance on course selection and placement opportunities
            </li>
            <li>Talk to real experts</li>
            <li>Absolutely free — no hidden charges</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="col-sm-12 col-lg-6  d-md-flex align-items-end justify-content-end">
          <div className="free-card ms-md-5">
            <h3 className="free-card-title">Get a free demo</h3>
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
          background: "rgba(255, 255, 255, 0.6)",
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

              {/* Interested In */}
              <div className="mb-3">
                <label className="form-label">Interested In</label>
                <select className="form-select free-input">
                  <option selected disabled>
                    ex: Web Development, Python, Full Stack
                  </option>
                  <option>Web Development</option>
                  <option>Data Science</option>
                  <option>Full Stack</option>
                  <option>Machine Learning</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-3">
                <label className="form-label">
                  Message or Brief Requirement
                </label>
                <textarea
                  placeholder="ex. 150 words"
                  className="form-control free-input"
                  // rows="3"
                ></textarea>
              </div>

              {/* Button */}
              <button type="submit" className="btn free-btn w-100">
                Get My Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
