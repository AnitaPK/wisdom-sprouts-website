import React from 'react';
import './intership.css';
import './SkillCardGrid.css'

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
        <div className="container w-75 mx-auto text-center">
            <h2 className="fw-bold custom-text-color-green">Choose Your Specialization</h2>
            <p className="mt-3 custom-text-color-green-small">Learn what aligns with your interest and future goals.</p>
        </div>
    <div className="cardContainer">
      <div className="container">
        <div className="row">
          {skillData.map((skill, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
              <div className={` ${index % 2 !== 0 ? "alternateCard" : "customCard"}`}>
                <div className="mb-2">
                <span className={`badge rounded-pill ${index % 2 !== 0 ?  "alternateBadge" : "customBadge"}`}>{skill.badge}</span>
                </div>
                <h3 className={`mt-2 ${index % 2 !== 0 ?"alternateCardTitle":"cardTitle" }`}>{skill.title}</h3>
                <p className={`${index % 2 !== 0 ?"alternateCardTools" : "cardTools"}`}>{skill.tools}</p>
                <p className={`${index % 2 !== 0 ?"alternateCardDescription" : "cardDescription"}`} >{skill.description}</p>
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