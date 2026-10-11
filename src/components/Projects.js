import React from 'react';

const projects = [
  {
    title: "Smart Agricultural Machinery Testing & Planning System (FMRC)",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Git", "GitHub"],
    description: "Developed a web-based smart agriculture platform for the Farm Machinery Research Centre (FMRC) to streamline machinery testing and operational planning. Built dynamic frontend interfaces and secure RESTful backend APIs to record, track, and manage test records and field operations.",
    githubLink: "https://github.com/thanusha-bandara/fmrc.git",
  },
  {
    title: "RepairTrack – Phone & Laptop Repair Shop Tracking System",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "bcrypt"],
    description: "Built a full-stack job tracking system featuring real-time dashboard status counts and automated overdue repair alerts. Implemented secure customer status lookup using randomized job numbers and 4-digit phone verification with rate limiting, alongside atomic MySQL database transactions.",
    githubLink: "https://github.com/Nuwanthi608/RepairTrack.git",
  },
  {
    title: "FinTrack – Personal Finance Management System",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Vite", "React Router", "Context API"],
    description: "Built a responsive web dashboard for personal financial management, expense tracking, and visual analytics. Implemented user authentication, protected routes, and state persistence using Context API and LocalStorage.",
    githubLink: "https://github.com/Nuwanthi608/FinTrack",
  },
  {
    title: "Student Event Management System",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    description: "Developed a dynamic web application for managing student events, registrations, and scheduling seamlessly with a reliable backend database.",
    githubLink: "https://github.com/Nuwanthi608/student-event-management.git",
  },
  {
    title: "Calculator App",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    description: "Built a clean and responsive calculator application supporting standard arithmetic operations with an interactive and modern UI.",
    githubLink: "https://github.com/Nuwanthi608/Calculator-App.git",
  },
  {
    title: "Personal Developer Portfolio Website",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Netlify", "Git", "GitHub"],
    description: "Designed and deployed a fully responsive developer portfolio highlighting projects, technical skills, and resume with automated CI/CD deployment workflow using GitHub and Netlify.",
    githubLink: "https://github.com/Nuwanthi608/my-portfolio.git",
  }
];

function Projects() {
  return (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ color: '#ffb703', fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>
        🚀 My Projects
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid rgba(255, 183, 3, 0.2)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}>
            <div>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '12px', fontWeight: 'bold' }}>
                {project.title}
              </h3>
              <p style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
                {project.description}
              </p>
            </div>
            
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} style={{
                    backgroundColor: 'rgba(255, 183, 3, 0.15)',
                    color: '#ffb703',
                    fontSize: '0.75rem',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontWeight: '600'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#ffb703',
                  color: '#03071e',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transition: 'background 0.3s'
                }}
              >
                📁 View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;