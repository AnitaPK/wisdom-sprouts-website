import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './SampleHeader.module.css';

const MyComponent = () => {
  return (
    <div className="container connectSection">


      <h1 className="connectTitle"> <span className="connectHighlight"> 
        Real Journeys Of Students
        </span>
           Who Transformed Their Careers with Wisdom Sprouts

      </h1>
      <p className="connectText">
        Every success story you see here began with a single decision—to trust the process, 
            believe in growth, and choose Wisdom Sprouts
      </p>
      <div>
      <button className="cutomButtonOrange">Join Us</button>
    </div>
    </div>
  );
};

export default MyComponent;
