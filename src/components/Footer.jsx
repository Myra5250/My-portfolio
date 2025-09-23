import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <p>© {new Date().getFullYear()} Namagembe Myrah. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
