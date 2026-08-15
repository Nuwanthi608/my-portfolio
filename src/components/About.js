import React from 'react';

function About() {
  return (
    <div className="container">
      <div className="about-section">
        <h2>About Me</h2>
        
        <h3>📚 Educational Background</h3>
        <p>🎓 I'm currently studying Information Technology at Institute of Technology, University of Moratuwa,</p>
        
       
        <h3>✅ Completed Courses</h3>
        <div className="completed-course">
         
          <p className="course-detail">
            <strong>Programming in Python - Python for Beginners</strong><br />
            I have successfully completed a Python programming course at University of Moratuwa through their Open Learning Platform.
            
          </p>
        </div>
        
        <h3>💻 Technical Skills</h3>
        <ul className="skills-list">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML5/CSS3</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>Git/GitHub</li>
          <li>Java</li>
          <li>MySQL</li>
        </ul>
        
        <div className="aspirations">
          <h3>🎯 Career Aspirations</h3>
          <p>I aspire to work as a Software Engineer at a global tech company, building innovative solutions that make a difference in people's lives.</p>
        </div>
      </div>
    </div>
  );
}

export default About;