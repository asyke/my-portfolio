import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.jpg'
import './Home.scss'

function Home() {
  useEffect(() => {
    document.title = 'Home | Asylbek'
  }, [])

  return (
<div className="page home-page">
  <div className="home-content">
    <div className="text-zone">
      <h1 className="fade-in-up delay-1">Hi, I'm Asylbek</h1>
      <p className="fade-in-up delay-2">Full Stack Software Engineer</p>
      <Link to="/contact" className="contact-btn fade-in-up delay-3">
        Contact Me
      </Link>
    </div>
    <div className="avatar-zone fade-in-up delay-3">
      <img src={avatar} alt="Asylbek Ibrakhimov" className="avatar" />
    </div>
  </div>
</div>

  )
}

export default Home
