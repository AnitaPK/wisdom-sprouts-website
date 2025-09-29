import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import Image from "next/image"

const ConnectSection = () => {
  return (
    <section className="connect-section py-0 mx-auto ">
      <div className="container px-5">
        <div className="row align-items-center">
          {/* Left Side: Text + Button */}
          <div className="col-md-7">
               <div className={`container connectSection}`}>


      <h1 className="connectTitle"> <span className="connectHighlight"> Let’s Connect </span>
      And Build Something Great Together</h1>
      <p className="connectText">
        Whether you’re a student, recruiter, or academic partner — we’re here 
              to help you take the next step.
      </p>
      <div>
      <button className="cutomButtonOrange">Connect Now</button>
    </div>
    </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-md-5   text-center mt-4 mt-md-0">
            <Image
              src="/contactus/ContactUs-First.png"
              alt="Connect Illustration"
              className="img-fluid"
              width={500}
              height={265}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
