import React from 'react';

function About() {
  return (
    <div className="container">
      <div className="about-section">
        <h2>About Me</h2>
        
        <div className="education-detail">
          <p className="education-text">
            I am an IT undergraduate at the University of Moratuwa with a strong interest in 
            <strong> Software Engineering and Full-Stack Web Development.</strong> 
            I am developing my skills in JavaScript, React.js, Node.js, Express.js, and MySQL by building practical web applications.
            <br /><br />
            I enjoy learning how frontend interfaces connect with backend APIs and databases to solve real-world problems. 
            I am currently looking for a <strong>Software Engineering Internship</strong> where I can contribute to a development team, learn from experienced engineers, and grow as a software developer.
          </p>
        </div>
        
        <div className="aspirations">
          <h3>🎯 Career Aspirations</h3>
          <p>
            My ambition is to work as a <strong>Software Engineer</strong> in an innovative technology environment. 
            I am actively seeking internship opportunities where I can apply my web development skills, 
            contribute to real-world software solutions, learn from industry experts, and grow into a 
            complete software engineering professional.
          </p>
        </div>

        <div className="linkedin-connect">
          <a href="https://www.linkedin.com/in/nuwanthi-piyathilaka-396a1335b/" target="_blank" rel="noreferrer" className="linkedin-btn">
            🔗 Connect with me on LinkedIn
          </a>
        </div>

      </div>
    </div>
  );
}

export default About;