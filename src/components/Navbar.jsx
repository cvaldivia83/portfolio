import React from 'react';
import useMedia from '../hooks/useMedia';

export default function Navbar() {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  // check if sandwich menu is open or closed

  
  return (
    <>
    { mobile && (
      <button aria-label="Menu" 
      className='mobileButton'
      onClick={() => setMobileMenu(!mobileMenu)}></button>
      )
    }

    <nav className="navbar">
      <div className="navbar-logo">
        <i className="fa-solid fa-code"></i>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item item-counter">
          <a href="#about">About</a>
        </li>
        <li className="navbar-item item-counter">
          <a href="#experience">Experience</a>
        </li>
        <li className="navbar-item item-counter">
          <a href="#work">Work</a>
        </li>
        <li className="navbar-item item-counter">
          <a href="#contact">Contact</a>
        </li>
        <li className="resume-btn">
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
    </>
  );
}
