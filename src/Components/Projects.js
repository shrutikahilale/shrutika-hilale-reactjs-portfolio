import React from 'react';
import '../projects.css'; // Import the CSS file for styling


const projects = [
  {
    title: 'App 1',
    description: 'A brief description of App 1.',
    imageUrl: 'path/to/app1-image.jpg',
    repoUrl: 'https://github.com/yourusername/app1'
  },
  {
    title: 'App 2',
    description: 'A brief description of App 2.',
    imageUrl: 'path/to/app2-image.jpg',
    repoUrl: 'https://github.com/yourusername/app2'
  },
  {
    title: 'Website',
    description: 'A brief description of your website.',
    imageUrl: 'path/to/website-image.jpg',
    repoUrl: 'https://github.com/yourusername/website'
  },
  {
    title: 'Portfolio Website',
    description: 'A brief description of your portfolio website.',
    imageUrl: 'path/to/portfolio-image.jpg',
    repoUrl: 'https://github.com/yourusername/portfolio-website'
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.imageUrl} alt={project.title} className="project-image" />
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;


// import React from "react";

// const ProjectCard = ({ project }) => {
//   return (
//     <div className="card-wrapper">
//       <div className="project-card">
//         <div className="card-front">
//           <h3>{project.name}</h3>
//           <p>{project.description}</p>
//           <p>
//             <strong>Technologies:</strong> {project.technologies.join(", ")}
//           </p>
//         </div>
//         <div className="card-back">
//           <a href={project.link} target="_blank" rel="noopener noreferrer">
//             View Code
//           </a>
//           {project.demo && (
//             <a href={project.demo} target="_blank" rel="noopener noreferrer">
//               View Demo
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Projects = () => {
//   const projects = [
//     {
//       name: "Project One",
//       description:
//         "A brief description of Project One. What it does, and why it's useful.",
//       technologies: ["React", "Node.js", "Express"],
//       link: "https://github.com/username/project-one",
//       demo: "https://project-one-demo.com",
//     },
//     {
//       name: "Project Two",
//       description:
//         "A brief description of Project Two. What it does, and why it's useful.",
//       technologies: ["Flutter", "Firebase"],
//       link: "https://github.com/username/project-two",
//       demo: "https://project-two-demo.com",
//     },
//     {
//       name: "Project Three",
//       description:
//         "A brief description of Project Three. What it does, and why it's useful.",
//       technologies: ["Java", "Spring Boot"],
//       link: "https://github.com/username/project-three",
//       demo: "https://project-three-demo.com",
//     },
//     // Add more projects as needed
//   ];

//   return (
//     <>
//       <h3>Projects</h3>
//       <div className="projects-container">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default Projects;
