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

  function handleScroll(e, sectionId) {
    e.preventDefault();
    const item = document.getElementById(sectionId);
    if (item) {
      item.scrollIntoView({ behavior: 'smooth' });
    }
  }

  
  return (
    <>


    <div className="flex justify-between items-center pl-8">
      <div className={`${mobile ? "hidden" : "navbar-logo"}`}>
          <i className="fa-solid fa-code"></i>
      </div>

      <nav className={`navbar ${isVisible && 'visible'} ${mobile ? 'navMobile' : 'navbar'} ${mobileMenu && 'navMobileActive'}`}>
        <ul className="navbar-list">
          <li className="navbar-item item-counter">
            <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
          </li>
          <li className="navbar-item item-counter">
            <a href="#experience" onClick={(e) => handleScroll(e, 'experience')}>Experience</a>
          </li>
          <li className="navbar-item item-counter">
            <a href="#work" onClick={(e) => handleScroll(e, 'work')}>Work</a>
          </li>
          <li className="navbar-item item-counter">
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
          </li>
          <li className={`${mobile ? "navbar-item item-counter" : "resume-btn"}`}>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>

      { mobile && (
        <button aria-label="Menu" 
        className={`${"mobileButton"} ${mobileMenu && "mobileButtonActive"}`}
        onClick={() => setMobileMenu(!mobileMenu)}></button>
        )
      }
    </div>



    </>
  );
}
