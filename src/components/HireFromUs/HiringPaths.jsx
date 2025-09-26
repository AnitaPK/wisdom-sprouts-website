import React from 'react';
import styles from './HiringPaths.module.css'; 

const HiringPaths = () => {
  const hiringOptions = [
    {
      id: 1,
      title: 'Direct Hiring From Internship Pool',
      description: 'Recruit top-performing interns who have already spent 6 months working on live projects with real-world exposure under our mentorship.',
      benefits: [
        'Candidates trained in tech stack',
        'Immediate joining availability',
        'Reduces onboarding time',
      ],
      buttonText: 'Request Intern Profiles',
      buttonLink: '#',
    },
    {
      id: 2,
      title: 'Campus Drive (Online/Offline)',
      description: 'Organize placement drives at Wisdom Sprouts locations (e.g., Hinjawadi, Akurdi) or through virtual hiring sessions.',
      benefits: [
        'Engage with a large pool in one go',
        'Pre-assessed candidates',
        'Hassle-free scheduling',
      ],
      buttonText: 'Book a Campus Drive',
      buttonLink: '#',
    },
    {
      id: 3,
      title: 'Resume Shortlisting Get Vetted Profiles',
      description: 'Receive a curated list of student resumes filtered by your job role, tech stack, and experience requirement.',
      benefits: [
        'Saves your internal screening effort',
        'Candidate pre-screened for soft skills',
        'Quick turnaround',
      ],
      buttonText: 'Request Shortlist',
      buttonLink: '#',
    },
    {
      id: 4,
      title: 'Job Fulfillment Program Final-Round Ready',
      description: 'Select from our elite pool of students who have completed job simulation projects, advanced technical tests, and mock interviews.',
      benefits: [
        'Refined, placement-ready talent',
        'Ideal for urgent openings',
        'Less technical onboarding needed',
      ],
      buttonText: 'Hire from Fulfillment Program',
      buttonLink: '#',
    },
  ];

  return (
    <section className={styles.hiringPathsSection}>
      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className={styles.mainTitle}>
              Flexible Hiring Paths That Fit Your Recruitment Strategy
            </h2>
            <p className={styles.subtitle}>
              Choose the model that works best for your hiring needs—<br />
              whether you want interns, full-time hires, or final-round-ready professionals.
            </p>
          </div>
        </div>
<div className="container">
        <div className="row justify-content-center">
          {hiringOptions.map((option) => (
            <div key={option.id} className="col-lg-3 col-md-6 mb-4 d-flex">
              <div className={`card ${styles.hiringCard}`}>
                <div className="card-body d-flex flex-column">
                  <h3 className={`card-title ${styles.cardTitle}`}>{option.title}</h3>
                  <p className={`card-text ${styles.cardDescription}`}>{option.description}</p>
                  <hr />
                  <ul className={`${styles.benefitsList} mt-auto`}>
                    {option.benefits.map((benefit, index) => (
                      <li key={index}>
                        <span className={styles.checkIcon}>&#10003;</span> {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4"> {/* Margin for button */}
                    <a href={option.buttonLink} className={`btn ${styles.cardButton}`}>
                      {option.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default HiringPaths;