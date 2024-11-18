import React from 'react';
import useMedia from '../hooks/useMedia';

export default function Navbar() {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  // check if sandwich menu is open or closed

  function handleClick() {
    setMobileMenu(!mobileMenu);
  }
  
  return (
    <div className="nav-container">
      <div className={ mobile ? 'hidden' : 'nav-logo'}>
        <i className="fa-solid fa-code"></i>
      </div>

      { mobile && (
        <button 
        onClick={handleClick}
        aria-label="Menu" 
        className={`mobileButton ${mobileMenu && "mobileButtonActive"}`}
        >
        </button>
        )
      }

      <nav className={ `${mobile ? 'navMobile' : 'nav'} ${ mobileMenu && 'navMobileActive' }` }>
        <ul className="nav-list">
          <li className="nav-item item-counter">
            <a href="#about" className="href">About</a>
          </li>
          <li className="nav-item item-counter">
            <a href="#experience">Experience</a>
          </li>
          <li className="nav-item item-counter">
            <a href="#work">Work</a>
          </li>
          <li className="nav-item item-counter">
            <a href="#contact">Contact</a>
          </li>
          <li className={ mobile ? 'nav-item item-counter' : 'resume-btn'}>
            <a href="/cacv.pdf"  target="_blank">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
