import React from 'react';
import myPhoto from '../me.jpeg'; /* අලුත් පින්තූරය මෙතනින් ලින්ක් වෙනවා */

function Home() {
  return (
    <div className="container">
      <div className="home-section">
        <div className="home-row">
          
          {/* වම් පැත්ත - අකුරු (Text) */}
          <div className="home-text-col">
            <h1 className="home-name">
              <span className="hello-text">Hello, I'm </span>
              <br />
              <span className="name-highlight">Nuwanthi Piyathilaka</span>
            </h1>

            <h2 className="home-title">IT Undergraduate | Aspiring Software Engineer</h2>
            
            <p className="home-description">
              I am an IT undergraduate at the University of Moratuwa with a strong interest in 
              <strong> Software Engineering and Full-Stack Web Development.</strong> 
              I am developing my skills in JavaScript, React.js, Node.js, Express.js, and MySQL by building practical web applications.
            </p>
            
            <p className="home-description">
              I enjoy learning how frontend interfaces connect with backend APIs and databases to solve real-world problems. 
              I am currently looking for a <strong>Software Engineering Internship</strong> where I can contribute to a development team, learn from experienced engineers, and grow as a software developer.
            </p>
            
            <div className="home-buttons">
              <a href="/projects" className="btn-primary">View My Projects</a>
              
            </div>
          </div>

          {/* දකුණු පැත්ත - පින්තූරය (Image) */}
          <div className="home-image-col">
            <div className="image-frame">
              <img 
                src={myPhoto}
                alt="Nuwanthi Piyathilaka"
                className="profile-photo-home"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;