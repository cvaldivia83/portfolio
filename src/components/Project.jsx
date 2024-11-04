import React from 'react';
import SectionTitle from './SectionTitle';
import useScroll from '../hooks/useScroll';

export default function Project() {
  const projectSection = React.useRef();
  const isVisible = useScroll(projectSection);

  return (
    <div className={`projects ${isVisible && 'visible'}`} id="work" ref={projectSection}>
      <SectionTitle title="Some Things I've Build" order="section-03" />

      <div className="project">
        <img src="https://res.cloudinary.com/rent-an-instrument/image/upload/v1730755071/Screenshot_2024-11-04_at_14.24.40_bozfen.png" alt="" />
      </div>
    </div>
  )
}