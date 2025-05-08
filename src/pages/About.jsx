import { useEffect } from "react";
import "./About.scss";

function About() {
  useEffect(() => {
    document.title = "About | Asylbek";
  }, []);

  return (
    <div className="page about-page">
      <div className="about-card animate-in delay-1">
        <h1 className="animate-in delay-1">About Me</h1>
        <p className="animate-in delay-2">
          I’m Asylbek Ibrakhimov, a Full Stack Software Engineer specializing in
          modern web development, based in Chicago, IL.
        </p>
        <p className="animate-in delay-3">
          I focus on frontend development using Angular and React, and also
          build backend services with Node.js, Golang, and MongoDB. I manage
          DevOps workflows including Google Cloud infrastructure and GitLab
          CI/CD pipelines. I enjoy writing clean, maintainable code and am
          always eager to learn and grow.
        </p>
      </div>
    </div>
  );
}

export default About;
