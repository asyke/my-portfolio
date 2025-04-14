import { useEffect } from "react";
import './About.scss'

function About() {
  useEffect(() => {
    document.title = 'About | Asylbek'
  }, []);

  return (
    <div className="page about-page">
      <div className="about-card">
        <h1>About Me</h1>
        <p>
          I'm Asylbek Ibrakhimov, a Full Stack Software Engineer based in Chicago, IL.
        </p>
        <p>
          I specialize in React, Angular, and Node.js and love building user-friendly, scalable applications.
        </p>
      </div>
    </div>
  );
}

export default About;
