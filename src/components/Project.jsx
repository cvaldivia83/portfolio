import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectItem from './ProjectItem';
import useScroll from '../hooks/useScroll';
import data from '../assets/projects.json';

export default function Project() {
  const projectSection = React.useRef();
  const isVisible = useScroll(projectSection);

  return (
    <div className={`projects ${isVisible && 'visible'}`} id="work" ref={projectSection}>
      <SectionTitle title="Some Things I've Build" order="section-03" />

    <ul className="projects-list">
      {
        data.map((project) => {
          return <ProjectItem key={project.id} title={project.title} description={project.description} featured={project.featured} image={project.image} alt={project.alt} tools={project.tools} github={project.github} url={project.url} />
        })
      }
    </ul>


    </div>
  )
}