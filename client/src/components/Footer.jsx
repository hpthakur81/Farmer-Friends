import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  const [serverStatus, setServerStatus] = useState('Checking server...');

  // Calls the backend health endpoint to show whether the API is running.
  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setServerStatus(`Backend: ${data.status === 'ok' ? 'Online' : 'Unavailable'}`))
      .catch(() => setServerStatus('Backend: Offline (frontend still works)'));
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>Farmer Friends</h3>
            <p>Growing Together, Farming Better. A platform sharing farming knowledge and support for farmers.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>Email: info@farmerfriends.com</li>
              <li>Phone: +91 XXXXX XXXXX</li>
              <li>Address: Your Location, India</li>
            </ul>
          </div>
          <div>
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
            <p className="api-status">{serverStatus}</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Farmer Friends. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
