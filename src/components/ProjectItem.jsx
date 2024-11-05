import React from 'react';
import PropTypes from 'prop-types';
import useScroll from '../hooks/useScroll';

const ProjectItem = ({title, featured, image, alt, tools}) => {
  const projectItem = React.useRef();
  const isVisible = useScroll(projectItem);

  return (
    <div className={`project ${isVisible && 'visible'}`} ref={projectItem}>
      {title}

    </div>
  )
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  featured: PropTypes.bool,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string)
}

export default ProjectItem;

