"use client";
import Image from "next/image";
import styles from "./SyllabusSection.module.css";

export default function SyllabusSection() {
  return (
    <section className={`container-fluid p-3 ${styles.syllabusSection}`}>
        <div className="container p-md-4 w-md-75">
      <div className="row ">
        
        {/* Left Content */}
        <div className="col-lg-5 col-md-12 my-2">
          <h2 className={`{styles.heading} py-3`}>Professionally Aligned Syllabus</h2>
          <p className={styles.subText}>
            Bridge the gap between formal education and practical skills,
            empowering you for your dream job
          </p>
        </div>

        {/* Right Content */}
        <div className="col-lg-7 col-md-12">
          <div className="row px-3">
            
            <div className="col-12 col-md-6 mb-4 d-flex">
              <Image src="/courses/syllabus/training.png" alt="Practical Training" width={60} height={53} />
              <div className="ms-4">
                <h5 className={styles.title}>Practical Training</h5>
                <p className={styles.desc}>Members</p>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-4 d-flex">
              <Image src="/courses/syllabus/trained.png" alt="Get Trained" width={60} height={53} />
              <div className="ms-4">
                <h5 className={styles.title}>Get Trained</h5>
                <p className={styles.desc}>From Industry Experts</p>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-4 d-flex">
              <Image src="/courses/syllabus/doubt.png" alt="Doubt Solving" width={60} height={53} />
              <div className="ms-4">
                <h5 className={styles.title}>Doubt Solving</h5>
                <p className={styles.desc}>Instant Doubt Solving Session</p>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-4 d-flex">
              <Image src="/courses/syllabus/job.png" alt="Job Assurance" width={60} height={53} />
              <div className="ms-4">
                <h5 className={styles.title}>Job Assurance</h5>
                <p className={styles.desc}>100% Job Assurance</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
