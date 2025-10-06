import React from 'react';
import './ITCareerSection.css';
import Image from 'next/image';

const ITCareerSection = () => {
  return (
    <section className="container my-5">
      <div className="container mx-auto mt-5 text-center ">
        <h2 className="fw-bold custom-text-color-green1">Ready to Launch Your IT Career?</h2>
               <p className="mt-3 custom-text-color-green-small">
            Limited seats available. Apply now and join the next batch.</p>
      </div>

      <div className="container">
  <div className="card shadow-lg border-0 itCareerCard">
    <div className="card-body p-4 p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
      
      {/* Image first on mobile, second on desktop */}
      <div className="order-1 order-md-2 mb-4 mb-md-0">
        <Image 
          src="/intership/teaching.png" 
          alt="teaching intership" 
          width={204} 
          height={200}
        />
      </div>

      {/* Text second on mobile, first on desktop */}
      <div className="text-white me-md-4 text-md-start order-2 order-md-1">
        <h3 className="card-title">
          Trusted by 30,000+ Students & 150+ Hiring Partners
        </h3>
        <p className="card-text">
          Join a growing community of learners transforming into industry-ready professionals.
        </p>
        <button className="custom-orng-btn">
          Apply for Internship
        </button>
      </div>

    </div>
  </div>
</div>

    </section>
  );
};

export default ITCareerSection;