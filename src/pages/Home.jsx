import { Link } from 'react-router-dom' // ✅ ADD THIS LINE
import avatar from '../assets/avatar.jpg'
import './Home.scss'

function Home() {
  return (
    <div className="page home-page">
      <div className="home-content">
        <div className="text-zone">
          <h1>Hi, I'm Asylbek</h1>
          <p>Full Stack Software Engineer</p>
          <Link to="/contact" className="contact-btn">Contact Me</Link>
        </div>
        <div className="avatar-zone">
          <img src={avatar} alt="Asylbek Ibrakhimov" className="avatar" />
        </div>
      </div>
    </div>
  )
}

export default Home
