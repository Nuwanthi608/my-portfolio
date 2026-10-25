import React from 'react';

const projects = [
{
    id: 1,
    title: "Smart Agricultural Machinery Testing & Planning System",
    description: "Developed a web-based smart agriculture platform for the Farm Machinery Research Centre (FMRC) to streamline machinery testing and operational planning. Built dynamic frontend interfaces and secure RESTful backend APIs.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Git", "GitHub"],
    githubLink: "https://github.com/SahanHasmitha/project-FMRC.git",
    icon: "🚜"
  },

  {
    id: 2,
    title: "Pure Journey - Eco Travel Platform",
    description: "A comprehensive eco-friendly travel supply and trip-planning web application designed to help travelers explore responsibly while minimizing single-use plastic waste. Features smart trip planner, reusable packing lists, and secure user authentication.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "JWT"],
    githubLink: "https://github.com/Nuwanthi608/pure-journey.git",
    icon: "🌿"
  },
  
  {
    id: 3,
    title: "RepairTrack - Phone & Laptop Repair Shop Tracking",
    description: "Built a full-stack job tracking system featuring real-time dashboard status counts and automated overdue repair alerts. Implemented secure customer status lookup using randomized job numbers and 4-digit phone verification.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "bcrypt"],
    githubLink: "https://github.com/Nuwanthi608/RepairTrack.git",
    icon: "🔧"
  },
  {
    id: 4,
    title: "FinTrack - Personal Finance Management System",
    description: "Built a responsive web dashboard for personal financial management, expense tracking, and visual analytics. Implemented user authentication, protected routes, and state persistence using Context API and LocalStorage.",
    technologies: ["React.js", "JavaScript", "Vite", "HTML5", "CSS3", "Context API"],
    githubLink: "https://github.com/Nuwanthi608/FinTrack.git",
    icon: "💰"
  },
  {
    id: 5,
    title: "Student Event Management System",
    description: "Developed a dynamic web application for managing student events, registrations, and scheduling seamlessly with a reliable backend database.",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    githubLink: "https://github.com/Nuwanthi608/student-event-management.git",
    icon: "📅"
  },
  {
    id: 6,
    title: "Calculator App",
    description: "Built a clean and responsive calculator application supporting standard arithmetic operations with an interactive and modern UI.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/Nuwanthi608/Calculator-App.git",
    icon: "🧮"
  },
  {
    id: 7,
    title: "Personal Developer Portfolio Website",
    description: "Designed and deployed a fully responsive developer portfolio highlighting projects, technical skills, and resume with automated CI/CD deployment workflow using GitHub and Netlify.",
    technologies: ["React.js", "Tailwind CSS", "Netlify", "Git", "GitHub"],
    githubLink: "https://github.com/Nuwanthi608/my-portfolio.git",
    icon: "💼"
  }
];

function Projects() {
  return (
    <div className="container">
      <h2 className="projects-heading">🚀 My Projects</h2>
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