import React from 'react';

const projects = [
  {
    title: "Smart Agricultural Machinery Testing & Planning System (FMRC)",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Git", "GitHub"],
    description: "Developed a web-based smart agriculture platform for the Farm Machinery Research Centre (FMRC) to streamline machinery testing and operational planning. Built dynamic frontend interfaces and secure RESTful backend APIs to record, track, and manage test records and field operations.",
    githubLink: "https://github.com/SahanHasmitha/Smart-Agricultural-Machinery-Testing-And-Planning-System-FMRC",
  },
  {
    title: "RepairTrack – Phone & Laptop Repair Shop Tracking System",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "bcrypt"],
    description: "Built a full-stack job tracking system featuring real-time dashboard status counts and automated overdue repair alerts. Implemented secure customer status lookup using randomized job numbers and 4-digit phone verification with rate limiting, alongside atomic MySQL database transactions.",
    githubLink: "https://github.com/Nuwanthi608/RepairTrack",
  },
  {
    title: "FinTrack – Personal Finance Management System",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Vite", "React Router", "Context API"],
    description: "Built a responsive web dashboard for personal financial management, expense tracking, and visual analytics. Implemented user authentication, protected routes, and state persistence using Context API and LocalStorage.",
    githubLink: "https://github.com/Nuwanthi608/FinTrack",
  },
  {
    title: "Personal Developer Portfolio Website",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Netlify", "Git", "GitHub"],
    description: "Designed and deployed a fully responsive developer portfolio highlighting projects, technical skills, and resume with automated CI/CD deployment workflow using GitHub and Netlify.",
    githubLink: "https://github.com/Nuwanthi608/my-portfolio",
    liveLink: "https://nuwanthi-piyathilaka-portfolio.netlify.app/",
  }
];

function Projects() {
  return (
    <div className="container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
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