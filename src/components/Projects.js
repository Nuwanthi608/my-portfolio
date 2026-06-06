import React from 'react';

const projects = [
  {
    id: 1,
    title: "Smart Agriculture System",
    description: "Farm testing management system that helps farmers monitor soil conditions, crop health, and weather patterns for better agricultural decisions.",
    technologies: ["React", "Node.js", "MongoDB", "IoT"],
    githubLink: "https://github.com/Nuwanthi608/smart-agriculture-system",
    icon: "🌾"
  },
  {
    id: 2,
    title: "Library Management System",
    description: "Java based library system for managing books, members, borrowing records, and returns with an intuitive interface.",
    technologies: ["Java", "JavaFX", "MySQL", "JDBC"],
    githubLink: "https://github.com/Nuwanthi608/library-management-system",
    icon: "📚"
  },
  {
    id: 3,
    title: "Student Management System",
    description: "Student records management application to handle enrollments, grades, attendance, and academic performance tracking.",
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL"],
    githubLink: "https://github.com/Nuwanthi608/student-management-system",
    icon: "🎓"
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