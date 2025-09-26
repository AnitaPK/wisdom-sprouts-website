// components/TalentPool.js
import React from "react";
import styles from "./TalentPool.module.css";

const TalentPool = () => {
  return (
    <section className={styles.talentPoolSection}>
      <div className="container">
        {/* Top Row: Title and Main Description */}
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <h2 className={styles.mainTitle}>
              A Diverse, Trained, And Placement-Ready Talent Pool Built For
              Today's Tech Needs
            </h2>
          </div>
          <div className="col-lg-6">
            <p className={styles.mainDescription}>
              From fresh graduates to career switchers, our candidates come
              equipped with strong fundamentals, real-world project experience,
              and the agility to succeed in modern tech roles.
            </p>
          </div>
        </div>

        {/* Bottom Row: Image and Feature Boxes */}
        <div className="row align-items-stretch">
          {/* Left Column: Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className={styles.imageContainer}>
              <img
                src="/HireFromUs/TalentPoolImage.png"
                alt="Students learning"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>

          {/* Right Column: Feature Boxes */}
          <div className="col-lg-6">
            {/* Feature 1: Graduates */}
            <div className={`${styles.featureBox} ${styles.graduatesBox} mb-4`}>
              <div className="row">
                <div className="col-1">
                  <div className={styles.featureNumber}>01</div>
                </div>
                <div className="col-11 ps-4">
                  <h3 className={styles.featureTitle}>
                    Graduates - BCA, BSc IT, BE/B.Tech (CS, ENTC, Mechanical)
                  </h3>
                  <p className={styles.featureText}>
                    Our students come from strong academic backgrounds in
                    computer science and engineering, including BCA, BSc IT, and
                    B.Tech streams. With added hands-on training in Full Stack
                    Development, DSA, and real-world project work, they're ready
                    to step into roles like Web Development, QA, and Technical
                    Support.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2: Career Switchers */}
            <div className={`${styles.featureBox} mb-4`}>
              <div className="row">
                <div className="col-1">
                  <div className={styles.featureNumber}>02</div>
                </div>
                <div className="col-11 ps-4">
                  <h3 className={styles.featureTitle}>
                    Career Switchers - From Non-IT to IT
                  </h3>
                  <p className={styles.featureText}>
                    We specialize in transforming passionate individuals from
                    mechanical, civil, and non-CS fields into successful tech
                    professionals. Through structured mentorship, foundational
                    bootcamps, and guided internships, many of our career
                    switchers are now thriving in IT companies as developers and
                    analysts.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3: Talent Stats & Placement Outcomes */}
            <div className={styles.featureBox}>
              <div className="row mb-0">
                <div className="col-1">
                  <div className={styles.featureNumber}>03</div>
                </div>
                <div className="col-11 ps-4">
                  <h3 className={styles.featureTitle}>
                    Talent Stats & Placement Outcomes
                  </h3>
                  <ul className={styles.statsList}>
                    <li>
                      {/* <span className={styles.checkIcon}>&#10003;</span> */}
                      ✅ 
                       1200+
                      Students Trained
                    </li>
                    <li>
                      {/* <span className={styles.checkIcon}>&#10003;</span>  */}
                      🎯
                      90%
                      Placed Within 3 Months
                    </li>
                  </ul>
                  <p className={styles.rolesTitle}>
                    🧩
                    Roles Suited for:</p>
                  <div className="row">
                    <div className="col-6">
                      <ul className={styles.rolesList}>
                        <li>
                          <span className={styles.dotIcon}>&bull;</span> Web
                          Developer
                        </li>
                        <li>
                          <span className={styles.dotIcon}>&bull;</span> QA
                          Analyst
                        </li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className={styles.rolesList}>
                        <li>
                          <span className={styles.dotIcon}>&bull;</span>{" "}
                          Technical Support
                        </li>
                        <li>
                          <span className={styles.dotIcon}>&bull;</span> Data
                          Analyst
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentPool;
