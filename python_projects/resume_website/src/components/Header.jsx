import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <h1>Patrick Kam</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="../pages/Resume">Resume</a>
          </li>
          <li>
            <a href="#resume">Portfolio</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;