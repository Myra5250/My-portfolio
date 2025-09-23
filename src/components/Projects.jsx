import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="card">
          <h3>Portfolio Website</h3>
          <p>A modern portfolio built with React and CSS.</p>
          <a href="#" className="btn btn-primary">View Project</a>
        </div>
        <div className="card">
          <h3>Business webiste</h3>
          <p>Caroline Ways Ltd</p>
          <a href="#" className="btn btn-primary">View Project</a>
        </div>
        <div className="card">
          <h3>Book Management System</h3>
          <p>A system for tracking books</p>
          <a href="#" className="btn btn-primary">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
