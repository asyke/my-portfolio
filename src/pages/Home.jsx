import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGitlab, FaLinkedin, FaFilePdf } from "react-icons/fa";
import avatar from "../assets/ava.jpg";
import "./Home.scss";

function Home() {
  useEffect(() => {
    document.title = "Home | Asylbek";
  }, []);

  return (
    <div className="page home-page">
      <div className="home-content">
        <div className="avatar-zone fade-in-up delay-1">
          <img
            src={avatar}
            alt="Asylbek Ibrakhimov portrait"
            className="avatar"
            aria-label="Portrait of Asylbek Ibrakhimov"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <div className="text-zone">
          <h1 className="fade-in-up delay-2">Hi, I'm Asylbek</h1>
          <p className="fade-in-up delay-3 title-role">
            Full Stack Software Engineer
          </p>
          <p className="fade-in-up delay-4 intro-text">
            I build modern web apps using React, Angular, Node.js, Docker, AWS,
            and GCP. Passionate about clean code, scalable systems, and
            improving developer experience.
          </p>
          <Link to="/contact" className="contact-btn fade-in-up delay-5">
            Contact Me
          </Link>

          <div className="socials fade-in-up delay-6">
            <a
              href="https://github.com/asyke"
              target="_blank"
              rel="noreferrer"
              data-tooltip="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://gitlab.com/asyke"
              target="_blank"
              rel="noreferrer"
              data-tooltip="GitLab"
            >
              <FaGitlab size={24} />
            </a>
            <a
              href="https://linkedin.com/in/asylbek-ibrakhimov"
              target="_blank"
              rel="noreferrer"
              data-tooltip="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              data-tooltip="Resume"
            >
              <FaFilePdf size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
