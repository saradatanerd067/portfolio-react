import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    window.addEventListener('scroll', () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      prevScrollPos = currentScrollPos;
    });
  }, []);

  return (
    <header className={`header ${showNavbar ? 'show' : 'hide'}`}>
      <div className="logo">Portfolio</div>
      <ul className="nav-links">
        <li><a href="#introduction">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
}

export default Header;
