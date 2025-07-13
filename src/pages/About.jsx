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
          I’m Asylbek Ibrakhimov, a Full Stack Software Engineer based in
          Chicago, IL. I specialize in crafting fast, clean, and scalable web
          applications.
        </p>

        <p className="animate-in delay-3">
          My primary focus is on frontend frameworks like{" "}
          <strong>Angular</strong> and <strong>React</strong>, but I also enjoy
          working with backend technologies like <strong>Node.js</strong>,{" "}
          <strong>Golang</strong>, and <strong>MongoDB</strong>. I manage
          deployments using <strong>Google Cloud Platform</strong>,
          <strong> AWS</strong>, and <strong>GitLab CI/CD.</strong>
        </p>

        <p className="animate-in delay-4">
          I'm passionate about solving problems, writing maintainable code, and
          constantly learning to improve both professionally and personally.
        </p>

        <div className="tech-stack animate-in delay-5">
          <h2>Tech Stack</h2>
          <ul>
            <li>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
            </li>
            <li>
              <a
                href="https://angular.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Angular
              </a>
            </li>
            <li>
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Node.js
              </a>
            </li>
            <li>
              <a
                href="https://go.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Golang
              </a>
            </li>
            <li>
              <a
                href="https://www.mongodb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                MongoDB
              </a>
            </li>
            <li>
              <a
                href="https://aws.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                AWS
              </a>
            </li>
            <li>
              <a
                href="https://cloud.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GCP
              </a>
            </li>
            <li>
              <a
                href="https://docs.gitlab.com/ee/ci/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitLab CI/CD
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
