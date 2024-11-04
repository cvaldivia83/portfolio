import React from 'react';
import useScroll from '../hooks/useScroll';

import SectionTitle from "./SectionTitle"

export default function About() {
  const aboutSection = React.useRef();
  const isVisible = useScroll(aboutSection);

  return (
    <div className={`about ${ isVisible && 'visible'} `} id="about" ref={aboutSection}>

      <SectionTitle title="About me" order="section-01" />

      <p className="about-paragraph">Hello! My name is Carla and I like creating things that live on the world wide web. </p>

      <p className="about-paragraph">My interest in web development started in 2016 when I began an internship in digital marketing that required hands-on skills to manage a WordPress website. It turns out that editing, creating, and delivering a website taught me a lot about HTML, CSS, and PHP. It also gave me the confidence to realize that coding was something that I was good at. </p>

      <p className="about-paragraph">After four years of working in digital marketing, I decided to take a big step and enrolled in a web development bootcamp where I immersed myself in learning programming languages, frameworks, and software development practices. Upon completion, I was invited to join the staff as a Web Development Lead Teacher. I have since taken on projects and roles that allow me to leverage both my technical skills and my background in digital marketing.</p>

      <p className="about-paragraph">Here are a few technologies I’ve been working with recently:</p>
      
      <ul className="about-list">
        <span>
          <li className="about-item"><span className="about-icon"><i className="fa-solid fa-star-of-life"></i></span>Ruby on Rails</li>
          <li className="about-item"><span className="about-icon"><i className="fa-solid fa-star-of-life"></i></span>Javascript (ES6+)</li>
        </span>
        <span>
          <li className="about-item"><span className="about-icon"><i className="fa-solid fa-star-of-life"></i></span>React</li>
          <li className="about-item"><span className="about-icon"><i className="fa-solid fa-star-of-life"></i></span>WordPress</li>
        </span>
      </ul>
    </div>
  
 
  
  )
}