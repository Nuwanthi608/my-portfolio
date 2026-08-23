import React from 'react';

function About() {
  return (
    <div className="container">
      <div className="about-section">
        <h2>About Me</h2>
        
        <h3>📚 Educational Background</h3>
        <p>🎓 IT Student at Institute of Technology, University of Moratuwa</p>
        
        <div className="education-detail">
          <p className="education-text">
            I'm currently studying Information Technology at Institute of Technology, 
            University of Moratuwa. I'm passionate about web development, programming, 
            and building solutions that make a difference.
          </p>
        </div>
        
        <h3>📜 Certificates & Completed Courses</h3>
        
        {/* Certificate 1 - Cisco Python Essentials 1 */}
        <div className="completed-course">
          <div className="course-badge">🏆 Cisco Networking Academy</div>
          <p className="course-detail">
            <strong>Python Essentials 1</strong><br />
            Successfully completed the Python programming fundamentals course 
            offered by Cisco Networking Academy. Covered core programming concepts, 
            data types, control structures, and functions.
            <br />
            <span className="course-date">📅 Completed: 13th August 2026</span>
          </p>
        </div>
        
        {/* Certificate 2 - HP LIFE IT for Business Success */}
        <div className="completed-course">
          <div className="course-badge">🏆 HP LIFE - HP Foundation</div>
          <p className="course-detail">
            <strong>IT for Business Success</strong><br />
            Completed the HP LIFE online course covering how to choose the best 
            technology for business and successfully integrate technology solutions 
            into business operations.
            <br />
            <span className="course-date">📅 Completed: 31st January 2026</span>
          </p>
        </div>
        
        {/* Certificate 3 - Open Learning Platform */}
        <div className="completed-course">
          <div className="course-badge">🏆 University of Moratuwa - Open Learning Platform</div>
          <p className="course-detail">
            <strong>Programming in Python - Python for Beginners</strong><br />
            I have successfully completed a Python programming course at 
            University of Moratuwa through their Open Learning Platform.
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
          <p>I aspire to work as a Software Engineer at a global tech company, 
          building innovative solutions that make a difference in people's lives. 
          I am passionate about continuous learning and contributing to meaningful projects.</p>
        </div>
      </div>
    </div>
  );
}

export default About;