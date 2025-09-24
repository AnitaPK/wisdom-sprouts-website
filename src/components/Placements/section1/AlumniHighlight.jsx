"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";
import './Section1.css'

const AlumniHighlight = () => {
  return (
    <section className="container p-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6">
          <h5 className="custom-text-color-orange fw-bold">Real Journeys Of Students</h5>
          <h2 className="fw-bold custom-text-color-green">
           Who Transformed Their Careers with Wisdom Sprouts
          </h2>
          <p className="mt-3 custom-text-color-green-small">
            Every success story you see here began with a single decision—to trust the process, 
            believe in growth, and choose Wisdom Sprouts
          </p>
          <Button className="mt-3 px-4 py-2 rounded-pill custom-orange-button">
            Join us
          </Button>
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
