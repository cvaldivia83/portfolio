import React from 'react';
import PropTypes from 'prop-types';
import useScroll from '../hooks/useScroll';


const ProjectItem = ({title, featured, description, image, alt, tools, github, url}) => {
  const projectItem = React.useRef();
  const isVisible = useScroll(projectItem);

  return (
    <li className={`project ${isVisible && 'visible'}`} ref={projectItem}>
      
      <div className="project-content">
        { featured && <p className="project-featured">Featured Project</p> }

        <h3 className="project-title">{title}</h3>

        <div className="project-description">
          <p>{description}</p>
        </div>

        <ul className="project-tools">
          { 
            tools.map((tool) => {
              return <li key={tool} className='project-tool'>{tool}</li>
            })
          }
        </ul>

        <div className="project-links">
          {
            github.map((gh) => {
              return (
              <a key={gh} href={gh} className='project-link'>
                <i className="fa-brands fa-github"></i>
              </a>)
            })
          }
          <a href={url} className='project-link'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>


      <div className="project-image">
        <img src={image} alt={alt} />
      </div>
    </li>
  )
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  featured: PropTypes.bool,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string), 
  github: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string.isRequired
}

export default ProjectItem;

