import React from 'react';

const projects = [
  {
    id: 1,
    title: "RepairTrack",
    description: "A job tracking system for phone and laptop repair shops. Customers can check repair status with a job number, receive SMS updates on status changes, and view spare part cost breakdowns. Built with React, Node.js/Express & MySQL.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    githubLink: "https://github.com/Nuwanthi608/RepairTrack.git",
    icon: "🔧"
  },
  {
    id: 2,
    title: "Smart Agriculture System",
    description: "Farm testing management system that helps farmers monitor soil conditions, crop health, and weather patterns for better agricultural decisions.",
    technologies: ["React", "Node.js", "MongoDB", "IoT"],
    githubLink: "https://github.com/SahanHasmitha/Smart-Agricultural-Machinery-Testing-And-Planning-System-FMRC.git",
    icon: "🌾"
  },
  {
    id: 3,
    title: "Student Event Management System",
    description: "Web-based application that enables students to browse and register for university events while allowing administrators to manage event details and participant registrations.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Nuwanthi608/student-event-management.git",
    icon: "📅"
  },
  {
    id: 4,
    title: "Calculator App",
    description: "A beginner-friendly calculator web application with basic arithmetic operations built using HTML, CSS and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Nuwanthi608/Calculator-App.git",
    icon: "🧮"
  },
  {
    id: 5,
    title: "FinTrack",
    description: "Personal Expense Tracker built to manage daily financial records, authentication, and view expense reports.",
    technologies: ["React", "JavaScript", "Vite", "CSS"],
    githubLink: "https://github.com/Nuwanthi608/FinTrack.git",
    icon: "💰"
  }
];

function Projects() {
  return (
    <div className="container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <span className="project-icon">{project.icon}</span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
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