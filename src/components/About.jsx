import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        Hi, I’m <strong>Namagembe Myrah</strong> — a passionate web developer with a
        love for building modern, responsive, and user-friendly web
        applications. I enjoy solving complex problems with clean code and
        bringing ideas to life through design and functionality.
      </p>

      {/* Skills Section */}
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>💻 Frontend: HTML, CSS, JavaScript, React</li>
          <li>⚙️ Backend: Node.js, Flask, REST APIs</li>
          <li>🗄️ Databases: MySQL, PostgreSQL</li>
          <li>🎨 Design: Responsive UI, Figma</li>
          <li>🚀 Tools: Git, GitHub, VS Code, Postman</li>
        </ul>
      </div>

      {/* Tech Stack Grid */}
      <div className="tech-stack">
        <h3>Languages i work with</h3>
        <div className="stack-grid">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>Flask</li>
          <li>Python</li>
          <li>MySQL</li>
        </div>
      </div>
    </section>
  );
};

export default About;
