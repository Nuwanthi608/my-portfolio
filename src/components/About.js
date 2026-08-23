import React from 'react';

function About() {
  return (
    <div className="container">
      <div className="about-section">
        <h2>About Me</h2>
        
        <h3>📚 Educational Background</h3>
        <ul className="education-list" style={{ listStyleType: 'none', paddingLeft: 0, color: '#ffffff' }}>
          <li style={{ marginBottom: '10px', color: '#ffffff' }}>
            🎓 <strong>Higher Education:</strong> Currently studying Information Technology at Institute of Technology, University of Moratuwa.
          </li>
          <li style={{ color: '#ffffff' }}>
            🏫 <strong>School Education:</strong> Completed G.C.E. O/L and G.C.E. A/L examinations at Seethadevi Girls' College, Kandy.
          </li>
        </ul>
        
        <h3>✅ Completed Courses</h3>
        <div className="completed-courses-list" style={{ color: '#ffffff' }}>
          <div className="completed-course" style={{ marginBottom: '15px' }}>
            <p className="course-detail" style={{ margin: 0, color: '#ffffff' }}>
              <strong>1. Programming in Python - Python for Beginners</strong><br />
              I have successfully completed a Python programming course at University of Moratuwa through their Open Learning Platform.
            </p>
          </div>

          <div className="completed-course" style={{ marginBottom: '15px' }}>
            <p className="course-detail" style={{ margin: 0, color: '#ffffff' }}>
              <strong>2. Python Essentials 1</strong><br />
              Completed certification offered by Cisco Networking Academy & OpenEDG Python Institute, reinforcing core programming logic, data structures, and problem-solving skills.
            </p>
          </div>

          <div className="completed-course" style={{ marginBottom: '15px' }}>
            <p className="course-detail" style={{ margin: 0, color: '#ffffff' }}>
              <strong>3. IT for Business Success</strong><br />
              Completed online course offered by HP LIFE and HP Foundation, focusing on selecting suitable technology solutions and integrating IT into business operations to drive growth.
            </p>
          </div>
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