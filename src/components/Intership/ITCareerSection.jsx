import React from 'react';
import './ITCareerSection.css';
import Image from 'next/image';

const ITCareerSection = () => {
  return (
    <section className="container">
      <div className="container w-75 mx-auto mt-5 text-center ">
        <h2 className="fw-bold custom-text-color-green">Ready to Launch Your IT Career?</h2>
               <p className="mt-3 custom-text-color-green-small">
            Limited seats available. Apply now and join the next batch.</p>
      </div>

      <div className="container">
        <div className={`card shadow-lg border-0 itCareerCard`}>
          <div className="card-body p-4 p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div className="text-white mb-4 mb-md-0 me-md-4 text-center text-md-start">
              <h3 className="card-title fw-bold">Trusted by 1000+ Students & 30+ Hiring Partners</h3>
              <p className="card-text">Join a growing community of learners transforming into industry-ready professionals.</p>
              <button className="custom-orng-btn">
                Apply for Internship
              </button>
            </div>
            <div className="d-none d-md-block">
              {/* Illustration Placeholder */}
                <Image src="/intership/teaching.png" alt="teaching intership" width={230} height={230}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITCareerSection;