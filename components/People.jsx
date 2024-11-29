import { useState } from 'react';
import logo from '../src/assets/peoples.png';
import "./People.css";

function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <>
      <div className="head-containor">
        <div className="logo">
          <img src={logo} alt="logo" className="po-logo" />
          <h3 className="peoples">PEOPLE'S <h4 className="orphans">ORPHAN</h4></h3>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item" onMouseEnter={() => toggleDropdown("events")} onMouseLeave={() => toggleDropdown(null)}>
              Events
              {activeDropdown === "events" && (
                <ul className="dropdown">
                  <li className="dropdown-item">Event 1</li>
                  <li className="dropdown-item">Event 2</li>
                </ul>
              )}
            </li>
            <li className="nav-item" onMouseEnter={() => toggleDropdown("about")} onMouseLeave={() => toggleDropdown(null)}>
              About Us
              {activeDropdown === "about" && (
                <ul className="dropdown">
                  <li className="dropdown-item">Our Team</li>
                  <li className="dropdown-item">Our Mission</li>
                </ul>
              )}
            </li>
            <li className="nav-item" onMouseEnter={() => toggleDropdown("contact")} onMouseLeave={() => toggleDropdown(null)}>
              Contact Us
              {activeDropdown === "contact" && (
                <ul className="dropdown">
                  <li className="dropdown-item">Email</li>
                  <li className="dropdown-item">Phone</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>

      <div className="background-section"></div>

      <div className="about-section">
        <h2>About People's Orphan</h2>
        <p>
          People's Orphan is a compassionate initiative dedicated to improving the lives of orphaned and underprivileged children. 
          Our mission is to provide a safe haven where children can find love, care, and opportunities to thrive. With a focus on 
          education, healthcare, and holistic development, we strive to create a brighter future for every child, helping them overcome 
          challenges and achieve their dreams.
        </p>
        <p>
          At People's Orphan, we believe every child deserves a chance to live with dignity and hope. Through the generous support 
          of our donors, volunteers, and community, we work tirelessly to transform lives. Together, we can break the cycle of 
          poverty and despair, ensuring that no child is left behind. Join us in our journey to empower young lives and build a 
          better tomorrow.
        </p>
      </div>

      <div className="signup">
        <h2>Sign Up</h2>
        <form className="signup-form">
          <input type="text" placeholder="Name" className="form-input" required />
          <input type="tel" placeholder="Mobile Number" className="form-input" required />
          <input type="email" placeholder="Email ID" className="form-input" required />
          <button type="submit" className="form-button">Sign Up</button>
        </form>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 People's Orphan. All Rights Reserved.</p>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f social-icon"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube social-icon"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram social-icon"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin social-icon"></i>
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp social-icon"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
