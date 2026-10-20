import './App.css';
import rahulImage from './assets/rt.png';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaGithub 
} from 'react-icons/fa';

export default function App() {
  return (
    <main className="card">
      {/* Profile Image */}
      <div className="card-image-container">
        <img src={rahulImage} alt="Rahul Trivedi" className="profile-img" />
      </div>

      {/* Main Content */}
      <div className="card-content">
        <header className="profile-header">
          <h1 className="name">Rahul Trivedi</h1>
          <p className="role">Backend Developer</p>
          <a 
            href="mailto:trivedirahul802@gmail.com" 
            className="website"
          >
            rahultrivedi.website
          </a>
        </header>

        {/* Action Buttons */}
        <div className="button-group">
          <a 
            href="mailto:trivedirahul802@gmail.com" 
            className="btn btn-email"
          >
            <FaEnvelope /> Email
          </a>
          <a 
            href="https://www.linkedin.com/in/rahul-trivedi-dev" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-linkedin"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {/* Text Sections */}
        <section className="info-section">
          <h2 className="section-title">About</h2>
          <p className="section-text">
            I am a Backend Developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
          </p>
        </section>

        <section className="info-section">
          <h2 className="section-title">Interests</h2>
          <p className="section-text">
            Food expert. Traveller. Reader. Internet fanatic. pop culture ninja. Coffee fanatic. Dev Entrepreneur.
          </p>
        </section>
      </div>

      {/* Social Footer */}
      <footer className="card-footer">
        <a href="https://x.com/RahulTrivedi007" target="_blank" rel="noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        {/* <a href="https://facebook.com/yourname" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a> */}
        <a href="https://www.instagram.com/rahul_trivedii_007/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://github.com/TheVirus-02" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </footer>
    </main>
  );
}