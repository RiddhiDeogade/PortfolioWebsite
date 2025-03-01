import React, { useState } from "react";
import "./App.css";
import Spline from '@splinetool/react-spline';
import "./HomePage.css";

const Portfolio = () => {
  const [recommendations, setRecommendations] = useState([
    "Riddhi is a very quick learner and quickly grasps key concepts of Web development.",
    "Working with Riddhi has been an awesome experience. She is highly knowledgeable and always goes the extra step.",
  ]);
  const [newRecommendation, setNewRecommendation] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const addRecommendation = () => {
    if (newRecommendation.trim()) {
      setRecommendations([...recommendations, newRecommendation]);
      setNewRecommendation("");
      setPopupVisible(true);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="topdiv">
          <a className="topmenu" href="#about-me">About Me</a>
          <a className="topmenu" href="#skills">Skills</a>
          <a className="topmenu" href="#projects">Projects</a>
        </div>
        <div className="profile_name">📞7276389678 <p id="mailId"> ✉️ deogaderiddhi@gmail.com</p> </div>
        {/* <div className="profile_name"></div> */}
      </nav>

      {/* About Me Section */}
      <Spline scene="https://prod.spline.design/zeICCqPQbjy7lvSE/scene.splinecode" />
      <section id="about-me" className="container_abt">
          <h1>Hi!</h1>
          <p>
            I'm a dedicated student pursuing B.E in Electronics and Computer science branch with a passion for
            innovative problem-solving and continuous learning, aiming towards becoming a Java Developer.          </p>
      </section>
      <br /><br /><br /><br /><br/><br/>

      <section id="education">
        <h2>EDUCATION</h2>
      <ul style={{listStyle: "none"}}>
      <li><strong>Ramdeobaba University</strong></li>
      <li>B.E in Electronics and Computer Science Engineering (2022 - 2026)</li>
     <li> CGPA: 9.0 </li> <br/>
      <li>Minors Degree: Information Technology (IT)</li>
      </ul>
      </section>
      <br /><br />

      
   

      {/* Skills Section */}
      <section id="skills">
        <h2>SKILLS</h2>
        <div className="all_skills">
          <div className="skill">
            <h6>Java</h6>
            <p className="skill-para">(Intermediate)</p>
          </div>
          <div className="skill">
            <h6>JavaScript</h6>
            <p className="skill-para">(Intermediate)</p>
          </div>
          <div className="skill">
            <h6>Hibernate</h6>
            <p className="skill-para">(Intermediate)</p>
          </div>
          <div className="skill">
            <h6>HTML</h6>
            <p className="skill-para">(Intermediate)</p>
          </div>
          <div className="skill">
            <h6>CSS</h6>
            <p className="skill-para">(Intermediate)</p>
          </div>
          <div className="skill">
            <h6>React</h6>
            <p className="skill-para">(Intermediate)</p>
          </div>
          <div className="skill">
            <h6>MySQL</h6>
            <p className="skill-para">(Intermediate)</p>
          </div>
          <div className="skill">
            <h6>GitHub</h6>
            <p className="skill-para">(Intermediate)</p>
          </div>
          <div className="skill">
            <h6>Spring Boot</h6>
            <p className="skill-para">(Beginner)</p>
          </div>
          <div className="skill">
            <h6>Python</h6>
            <p className="skill-para">(Beginner)</p>
          </div>
          <div className="skill">
            <h6>C</h6>
            <p className="skill-para">(Beginner)</p>
          </div>
          <div className="skill">
            <h6>Spline 3D Modelling</h6>
            <p className="skill-para">(Basic knowledge)</p>
          </div>
          <div className="skill">
            <h6>AWS</h6>
            <p className="skill-para">(Beginner)</p>
          </div>
          <div className="skill">
            <h6>oAuth</h6>
            <p className="skill-para">(Beginner)</p>
          </div>

          <div className="skill">
            <h6>Competitive Programming</h6>
          </div>
          <div className="skill">
            <h6>Time Management</h6>
          </div>
          <div className="skill">
            <h6>Organisation Skills</h6>
          </div>
          <div className="skill">
            <h6>Communication Skills</h6>
          </div>
          <div className="skill">
            <h6>Fast Learner</h6>
          </div>

        </div>
      </section>
      <br /><br /><br /><br />

      <section id="certificates">
        <ul>
          <li>Mentorship at Persistent Systems Ltd. (Nov 2024 - Jan 2025): <a className="cert-link" href="https://drive.google.com/file/d/1UxYR61PZHm43cR1cW8MDqWDBV1t27sjg/view?usp=sharing">View</a></li>
          <li>Cisco Computer Network Certification: <a className="cert-link" href="https://drive.google.com/file/d/1gzb45-o4_3-0qyELIrrLYoZ6u78eWZgW/view?usp=sharing">View </a></li>
          <li>NPTEL Online Certification in Software Testing: <a className="cert-link" href="https://drive.google.com/file/d/1t39768ltt8tuhriJp4Yr1P80Qr2XS3eg/view?usp=sharing">View </a></li>
          <li>Intro to Web Development with HTML, CSS & JS: <a className="cert-link" href="https://drive.google.com/file/d/18WYHSLZ6APT7Jp5syNS-SXJGPqH4JLJX/view?usp=sharing">View </a></li>
          <li>AWS Practitioner Certification Training (Ongoing)</li>
        </ul>
        <h2>CERTIFICATES</h2>
      </section>
      <br /><br /><br />
      {/* Projects Section */}
      <section id="projects">
        <h2>PROJECTS</h2>
        <div className="project-card">
          <h3>Expense Management System</h3>
          <p>Created a web-based application that enables users to efficiently track financial transactions.</p>
          <ul style={{listStyle: "none"}}>
            <li><strong>Frontend:</strong> Developed using React, ensuring a modern and responsive user experience.</li>
            <li><strong>Backend:</strong> Built using Spring Boot, MySQL, and Hibernate, with JWT authentication for secure access.</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A frontend website to showcase all my skillsets.</p>
          <ul style={{listStyle: "none"}}>
            <li ><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
          </ul>
        </div>
      </section>
      <br /><br /><br /><br />

   

      {/* Recommendations Section */}
      <section id="recommendations">
        <h2>RECOMMENDATIONS</h2>
        <div className="all_recommendations">
          {recommendations.map((rec, index) => (
            <div key={index} className="recommendation">{rec}</div>
          ))}
        </div>
      </section>
      <br /><br /><br /><br />

      {/* Recommendation Form */}
      <section id="contact">
        <fieldset>
          <legend>Leave a Recommendation</legend>
          <textarea id="text_area"
            value={newRecommendation}
            onChange={(e) => setNewRecommendation(e.target.value)}
            placeholder="Message"
          ></textarea><br/>
          <button id="submit" onClick={addRecommendation}>Submit</button>
        </fieldset>
      </section>

      {/* Pop-up Message */}
      {popupVisible && (
        <div className="popup">
          <h3>Thanks for leaving a message!</h3>
          <button onClick={() => setPopupVisible(false)}>Ok</button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
