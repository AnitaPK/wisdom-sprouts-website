import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './SampleHeader.module.css';

const MyComponent = () => {
  return (
    <div className={`container ${styles.connectSection}`}>


      <h1 className={styles.connectTitle}> <span className={styles.connectHighlight}> Let’s Connect </span>
      And Build Something Great Together</h1>
      <p className={styles.connectText}>
        Whether you’re a student, recruiter, or academic partner — we’re here 
              to help you take the next step.
      </p>
      <div>
      <button className={styles.cutomButtonOrange}>Get Started</button>
    </div>
    </div>
  );
};

export default MyComponent;
