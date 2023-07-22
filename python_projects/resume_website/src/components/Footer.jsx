import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa';
import '../css/Footer.css'

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/patrick-kam-54930312b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/patrick_kam_" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/patrickkam13" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="mailto:kamp4313@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://github.com/kamp99" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <p className="cc">© 2023 Patrick Kam All rights reserved.</p>
      </div>
      
    </footer>
  );
}

export default Footer;
