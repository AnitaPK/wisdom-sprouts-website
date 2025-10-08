"use client";
import React from "react";
import Image from "next/image";
import styles from "./PlacementBenefits.module.css";

const PlacementBenefits = () => {
  const benefits = [
    { id: 1, title: "Profiles highlighted", desc: "Get access to an abundance of job openings", img: "/courses/num1.png" },
    { id: 2, title: "Companies Hiring", desc: "Expanded job search with a vast network of companies hiring", img: "/courses/num2.png" },
    { id: 3, title: "Profiles highlighted on naukri.com", desc: "Make a distinct mark for yourself on India’s leading job portal.", img: "/courses/num3.png" },
    { id: 4, title: "Dedicated placement team", desc: "Guiding and motivating you every step of the way.", img: "/courses/num4.png" },
    { id: 5, title: "Members placement team", desc: "A dedicated team to help you get placed in your dream company.", img: "/courses/num5.png" },
    { id: 6, title: "Job openings shared every day", desc: "We send job openings daily to your WhatsApp directly", img: "/courses/num6.png" },
  ];

  return (
    <section className="container-fluid">
    <div className="container my-5">
      <h3 className={`text-center mb-4 ${styles.sectionTitle}`}>Placement benefits</h3>
      <div className="row g-2 g-md-4">
        {benefits.map((b) => (
          <div key={b.id} className="col-6 col-lg-4 mb-1 mb-md-0">
            <div className={`card h-100 ${styles.cardBox}`}>
              <div className="card-body d-flex flex-column">
                <Image src={b.img} alt={`step-${b.id}`} width={28} height={28} className={styles.numImg} />
                <h5 className={`card-title my-2 ${styles.cardTitle}`}>{b.title}</h5>
                <p className={`card-text ${styles.cardText}`}>{b.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default PlacementBenefits;
