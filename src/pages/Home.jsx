import avatar from '../assets/avatar.jpg' // adjust path if needed
import './Home.scss' // or .css if you’re using css

function Home() {
  return (
    <div className="page home-page">
      <div className="home-content">
        <div className="text-zone">
          <h1>Hi, I'm Asylbek</h1>
          <p>Full Stack Software Engineer</p>
          <button className="contact-btn">Contact Me</button>
        </div>
        <div className="avatar-zone">
          <img src={avatar} alt="Asylbek Ibrakhimov" className="avatar" />
        </div>
      </div>
    </div>
  )
}

export default Home
