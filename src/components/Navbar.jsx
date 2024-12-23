import React from 'react';
import useMedia from '../hooks/useMedia';

export default function Navbar() {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  // check if sandwich menu is open or closed
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, [])

  function handleClick() {
    setMobileMenu(!mobileMenu);
  }

  function handleScroll(e, sectionId) {
    e.preventDefault();
    const item = document.getElementById(sectionId);

    if (item) {
      item.scrollIntoView({ behavior: 'smooth' });
    }

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

      <nav className={ `${mobile ? 'navMobile' : 'nav'} ${ mobileMenu && 'navMobileActive' } ${!mobile && isVisible ? 'visible' : ''}`}>
        <ul className="nav-list">
          <li className={`${mobile && 'opacity-100'} nav-item item-counter`} onClick={(e) => handleScroll(e, 'about')}>
            <a href="#about" className="href">About</a>
          </li>
          <li className={`${mobile && 'opacity-100'} nav-item item-counter`} onClick={(e) => handleScroll(e, 'experience')}>
            <a href="#experience">Experience</a>
          </li>
          <li className={`${mobile && 'opacity-100'} nav-item item-counter`} onClick={(e) => handleScroll(e, 'work')}>
            <a href="#work">Work</a>
          </li>
          <li className={`${mobile && 'opacity-100'} nav-item item-counter`} onClick={(e) => handleScroll(e, 'contact')}>
            <a href="#contact">Contact</a>
          </li>
          <li className={ mobile ? 'nav-item item-counter opacity-100' : 'resume-btn'}>
            <a href="/cacv.pdf"  target="_blank">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
