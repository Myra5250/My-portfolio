import React from "react";
import Myra from "../assets/myra.jpg"; // make sure you put your photo inside src/assets/

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Left: Text */}
        <div className="hero-text">
          <h1>
            Hello, I’m <span className="highlight">Namagembe Myrah</span>
          </h1>
          <p>
            I’m a passionate Web Developer creating modern and responsive
            websites that focus on clean design and user experience.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero-photo">
          <img src={Myra} alt="Your Name" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
