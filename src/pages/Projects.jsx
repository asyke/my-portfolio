import './Projects.scss'
import project1 from '../assets/project1.png'

function Projects() {
  return (
    <div className="projects-page page">
      <h1>My Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <img src={project1} alt="Project 1 Screenshot" />
          <h2>Math ORT</h2>
          <p>A clone of Etalon.kg with real quiz features and SendGrid integration.</p>
          <div className="tech-stack">
            <span className="badge">React</span>
            <span className="badge">Node.js</span>
            <span className="badge">MongoDB</span>
            <span className="badge">Tailwind</span>
          </div>
          <div className="project-links">
            <a href="https://math-ort.netlify.app" target="_blank">🔗 Live</a>
            <a href="https://github.com/asyke/ort-clone" target="_blank">💻 Code</a>
          </div>
        </div>

        {/* Add more cards here */}
      </div>
    </div>
  )
}

export default Projects
