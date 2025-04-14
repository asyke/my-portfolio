import './Projects.scss'
import { projects } from '../data/projects'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live <FaExternalLinkAlt />
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
