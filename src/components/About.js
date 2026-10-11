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
            I am an Information Technology undergraduate at the Institute of Technology,
            University of Moratuwa (ITUM). I am a passionate Full-Stack Developer
            with hands-on experience in building responsive web applications using
            React.js, Node.js, Express.js, and MySQL. I love solving real-world problems
            through clean code, modern web design, and structured databases.
          </p>
        </div>
        
        <h3>💻 Technical Skills</h3>

        <div className="skills-category">
          <h4>Programming Languages:</h4>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>

        <div className="skills-category">
          <h4>Frontend:</h4>
          <ul className="skills-list">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Vite</li>
          </ul>
        </div>

        <div className="skills-category">
          <h4>Backend:</h4>
          <ul className="skills-list">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
            <li>JWT</li>
            <li>bcrypt</li>
          </ul>
        </div>

        <div className="skills-category">
          <h4>Databases:</h4>
          <ul className="skills-list">
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="skills-category">
          <h4>Tools:</h4>
          <ul className="skills-list">
            <li>Git</li>
            <li>GitHub</li>
            <li>Netlify</li>
            <li>Postman</li>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </div>
        
        <div className="aspirations">
          <h3>🎯 Career Aspirations</h3>
          <p>My ambition is to work as a Full-Stack Software Engineer 
            in an innovative technology environment. I am actively 
            seeking internship opportunities where I can apply my web
            development skills, contribute to real-world software solutions, 
            learn from industry experts, and grow into a complete software engineering
            professional.</p>
        </div>
      </div>
    </div>
  );
}

export default About;