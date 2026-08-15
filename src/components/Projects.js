import React from 'react';

const projects = [
  {
    id: 1,
    title: "Smart Agriculture System",
    description: "Farm testing management system that helps farmers monitor soil conditions, crop health, and weather patterns for better agricultural decisions.",
    technologies: ["React", "Node.js", "MongoDB", "IoT"],
    githubLink: "https://github.com/SahanHasmitha/project-FMRC.git",
    icon: "🌾"
  },
  {
    id: 2,
    title: "Student Event Management System",
    description: "Web-based application that enables students to browse and register for university events while allowing administrators to manage event details and participant registrations.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Nuwanthi608/student-event-management.git",
    icon: "📅"
  },
  {
    id: 3,
    title: "Smart Student Management System",
    description: "Python-based student management system with grading, reports and file handling. Manage student records, results, and generate reports efficiently.",
    technologies: ["Python", "File Handling", "Reports"],
    githubLink: "https://github.com/Nuwanthi608/smart-student-management.git",
    icon: "👨‍🎓"
  },
  {
    id: 4,
    title: "Calculator App",
    description: "A beginner-friendly calculator web application with basic arithmetic operations built using HTML, CSS and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Nuwanthi608/Calculator-App.git",
    icon: "🧮"
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