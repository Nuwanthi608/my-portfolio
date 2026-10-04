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
        
        {/* Certificate 1 */}
        <div className="completed-course">
          
          <div className="course-info">
            <div className="course-badge">(1) HP LIFE - HP Foundation</div>
            <p className="course-detail">
              <strong>IT for Business Success</strong><br />
              Successfully completed the "IT for Business Success" online course offered by 
              HP LIFE and HP Foundation.
              <br />
              <span className="course-date">📅 Issued: January 2026</span>
            </p>
          </div>
        </div>
        
        {/* Certificate 2 */}
        <div className="completed-course">
          
          <div className="course-info">
            <div className="course-badge">(2) University of Moratuwa</div>
            <p className="course-detail">
              <strong>Python for Beginners</strong><br />
              Successfully completed the "Python for Beginners" online learning programme 
              conducted by the Department of Computer Science & Engineering, 
              University of Moratuwa.
              <br />
              <span className="course-date">📅 Issued: March 2024</span>
            </p>
          </div>
        </div>
        
        {/* Certificate 3 */}
        <div className="completed-course">
       
          <div className="course-info">
            <div className="course-badge">(3) University of Moratuwa</div>
            <p className="course-detail">
              <strong>Web Design for Beginners</strong><br />
              Successfully completed the "Web Design for Beginners" online learning programme 
              conducted by the University of Moratuwa. Learned HTML, CSS, and responsive 
              web design fundamentals.
              <br />
              <span className="course-date">📅 Issued: August 2026</span>
            </p>
          </div>
        </div>
        
        {/* Certificate 4 */}
        <div className="completed-course">
          
          <div className="course-info">
            <div className="course-badge">(4)OpenEDG Python Institute</div>
            <p className="course-detail">
              <strong>Python Essentials 1</strong><br />
              Successfully completed the Python Essentials 1 certification by 
              Cisco Networking Academy & OpenEDG Python Institute.
              <br />
              <span className="course-date">📅 Issued: August 2026</span>
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
          <p>I aspire to work as a Software Engineer at a global tech company, 
          building innovative solutions that make a difference in people's lives.</p>
        </div>
      </div>
    </div>
  );
}

export default About;