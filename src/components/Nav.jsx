import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="theme-toggle-container">
        <span className="theme-emoji" aria-label="Theme Icon">
          {theme === 'dark' ? '🌙' : '☀️'}
        </span>
        <label className="switch">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === 'dark'}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  )
}

export default Nav
