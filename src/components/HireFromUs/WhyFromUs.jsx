// components/WhyHireUs.js
import React from 'react';
import styles from './WhyFromUs.module.css'; 
const WhyHireUs = () => {
  const hireBenefits = [
    {
      id: 1,
      image: '/HireFromUs/Frame1.png',
      text: 'Trained In Fullstack Development – Java / MERN / Python',
    },
    {
      id: 2,
      image: '/HireFromUs/Frame2.png', 
      text: 'Hands-On Project Experience During Internship',
    },
    {
      id: 3,
      image: '/HireFromUs/Frame3.png',
      text: 'Exposure To DSA, Soft Skills & Interview Prep',
    },
    {
      id: 4,
      image: '/HireFromUs/Frame4.png',
      text: '6 Months Internship + Real-World Case Studies',
    },
    {
      id: 5,
      image: '/HireFromUs/Frame5.png',
      text: 'Ready To Contribute From Day 1',
    },
  ];

  return (
    <section className={styles.whyHireUsSection}>
      <div className="container mt-5">
        <h2 className={`text-center mb-3 ${styles.sectionTitle}`}>
          Why To Hire From Wisdom Sprouts?
        </h2>
        <div className="row justify-content-center">
          {hireBenefits.slice(0, 3).map((benefit) => (
            <div key={benefit.id} className="col-lg-4 col-md-6 mb-3">
              <div className={`text-center ${styles.benefitCard}`}>
                <img
                  src={benefit.image}
                  alt="Benefit Icon"
                  className={styles.benefitImage}
                />
                <p className={styles.benefitText}>{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          {hireBenefits.slice(3, 5).map((benefit) => (
            <div key={benefit.id} className="col-lg-4 col-md-6 mb-4">
              <div className={`text-center ${styles.benefitCard}`}>
                <img
                  src={benefit.image}
                  alt="Benefit Icon"
                  className={styles.benefitImage}
                />
                <p className={styles.benefitText}>{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireUs;