"use client";
import React from "react";
import Image from "next/image";
import styles from "./PlacementBenefits.module.css";

const BenefitsBeyondLearning = () => {
  const items = [
    { id: 1, label: "Github profile", img: "/courses/git.png" },
    { id: 2, label: "LinkedIn profile", img: "/courses/linkedin.png" },
    { id: 3, label: "Resume writing", img: "/courses/resume.png" },
    { id: 4, label: "Soft skills", img: "/courses/softSkill.png" },
    { id: 5, label: "Interview preparation", img: "/courses/interview.png" },
  ];

  return (
    <div className="container my-5 w-75">
      <h3 className={`text-center mb-4 ${styles.sectionTitle}`}>
        Benefits beyond learning
      </h3>
      <div className="row g-3 justify-content-center">
        {items.map((item) => (
          <div key={item.id} className="col-12 col-md-4">
            <div className={` text-center rounded ${styles.learningBox}`}>
              <div className={`${styles.customIcon}`}>
                <Image
                  src={item.img}
                  alt={item.label}
                  width={30}
                  height={30}
                  className={styles.iconImg}
                />
              </div>
              <h6 className={styles.learningText}>{item.label}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsBeyondLearning;
