"use client";
import Image from "next/image";
import "./Section1.css";

const AlumniHighlight = () => {
  return (
    <section className="container p-0">
      <div className="row">
        {/* Left Content */}
        <div className="col-md-6">
          <div className="container connectSection">
            <h1 className="connectTitle">
              <span className="connectHighlight">
                Real Journeys Of Students {" "}
              </span>
              Who Transformed Their Careers with Wisdom Sprouts
            </h1>
            <p className="connectText">
              Every success story you see here began with a single decision—to
          trust the process, believe in growth, and choose Wisdom Sprouts
            </p>
            <div>
              <button className="cutomButtonOrange">Join Us</button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <Image
            src="/placements/alumni-illustration.png"
            alt="Alumni Illustration"
            width={450}
            height={450}
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default AlumniHighlight;
