import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        {/* Left: Contact info */}
        <div className="contact-info">
          <p>
            Interested in working together? I’d love to connect! Feel free to
            reach out via email or social media.
          </p>
          <ul>
            <li>
              📧 Email:{" "}
              <a href="cmyra0125@gmail.com">cmyra0125@gmail.com</a>
            </li>
            <li>
              💼 LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/myra-namagembe-856b31333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                https://www.linkedin.com/in/myra-namagembe-856b31333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
              </a>
            </li>
            <li>
              🐙 GitHub:{" "}
              <a href="https://github.com/Myra5250" target="_blank">
                https://github.com/Myra5250
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact form */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div><br />
      <p>
        You can also send me an email.
      </p>
      <a href="cmyra0125@gmail.com" className="btn btn-secondary">
        Send Email
      </a>
    </section>
  );
};

export default Contact;
