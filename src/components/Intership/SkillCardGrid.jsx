import React from 'react';
import './intership.css';

const skillData = [
  { badge: "DEVELOPER READY", title: "MERN Stack", tools: "Tools: MongoDB, Express.js, React, Node.js", description: "Build dynamic web apps using JavaScript's most powerful tech stack." },
  { badge: "BACKEND STRONG", title: "Java Full Stack", tools: "Tools: Java, Spring Boot, MySQL, JSP", description: "Master enterprise-grade backend systems and frontend integration." },
  { badge: "VERSATILE SKILLSET", title: "Python Full Stack", tools: "Tools: Django, Flask, MySQL, Bootstrap", description: "From scripting to web apps — Python developers are in demand." },
  { badge: "DATA-DRIVEN CAREER", title: "AI / ML", tools: "Tools: Python, NumPy, TensorFlow, Scikit-learn", description: "Work on data modeling, machine learning algorithms, and real AI apps." },
  { badge: "DEPLOYMENT READY", title: "Cloud & DevOps", tools: "Tools: AWS, Docker, Kubernetes, Jenkins", description: "Get skilled in infrastructure automation and cloud deployment." },
  { badge: "SECURITY ANALYST READY", title: "Cyber Security", tools: "Tools: Kali Linux, Wireshark, Python", description: "Protect systems and data through ethical hacking and analysis." },
];

const SkillCardGrid = () => {
  return (
    <section className="cardSection mt-5">
        <div>
            <h3>Choose Your Specialization</h3>
            <p>Learn what aligns with your interest and future goals.</p>
        </div>
    <div className="cardContainer">
      <div className="container">
        <div className="row">
          {skillData.map((skill, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
              <div className={`"customCard" ${index % 2 !== 0 ? "alternateCard" : ""}`}>
                <span className="badge">{skill.badge}</span>
                <h3 className="cardTitle">{skill.title}</h3>
                <p className="cardTools">{skill.tools}</p>
                <p className="cardDescription">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default SkillCardGrid;