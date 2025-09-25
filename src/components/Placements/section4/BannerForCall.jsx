import React from 'react';
import '@/styles/banner.css';
import Image from 'next/image';

const BannerForCall = () => {
  return (
    <section className="container mt-5">
       <div className="container">
        <div className={`card shadow-lg border-0 itCareerCard`}>
          <div className="card-body p-4 p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div className="text-white mb-4 mb-md-0 me-md-4 text-center text-md-start">
              <h3 className="card-title fw-bold ">
                Ready to start your placement journey?</h3>
              <button className="custom-orng-btn">
                Enroll Now
              </button>
            <button className="custom-white-btn">
                Contact Us
              </button>
            </div>
            <div className="d-none d-md-block">
              {/* Illustration Placeholder */}
                <Image src="/intership/teaching.png" alt="teaching intership" width={200} height={200}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerForCall;