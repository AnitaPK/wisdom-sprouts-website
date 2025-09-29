import React from 'react';
import '@/styles/banner.css';
import Image from 'next/image';

const ExploreTrainingPrograms = () => {
  return (
    <section className="container mt-5">
       <div className="container">
        <div className={`card shadow-lg border-0 itCareerCard`}>
<div className="card-body p-4 p-md-4 d-flex flex-column flex-md-row align-items-center justify-content-between">
  {/* Image First on Mobile, Second on Desktop */}
  <div className="order-1 order-md-2 mb-4 mb-md-0 text-center">
    <Image 
      src="/intership/teaching.png" 
      alt="teaching intership" 
      width={230} 
      height={230} 
    />
  </div>

  {/* Text Second on Mobile, First on Desktop */}
  <div className="order-2 order-md-1 text-white text-center text-md-start">
    <h3 className="card-title fw-bold mb-3">
      Explore our training programs and start your journey today.
    </h3>
    <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-md-start">
      <button className="custom-orng-btn">
        Explore Courses
      </button>
      <button className="custom-white-btn">
        Contact Us
      </button>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default ExploreTrainingPrograms;