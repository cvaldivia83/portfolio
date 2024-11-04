import React from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      setIsVisible(true);
    }, [])

  return (
    <div className={`hero ${isVisible && 'visible'}`}>
      <p className="hero-hello">Hi, my name is</p>
      <h1 className="hero-name">Carla Valdivia</h1>
      <h2 className="hero-subtitle">I build things for the web.</h2>
      <p className="hero-description">I am a Fullstack Web Developer with experience in building (and occasionally designing) digital experiences.</p>
      <p className="hero-description">
      After completing Le Wagon&apos;s Web Development Bootcamp I successfully pivoted into software development, where as a Lead Teacher I have since taken on projects and roles that allow me to leverage both my technical skills and my soft skills. 
      </p>
    </div> 
  )
}