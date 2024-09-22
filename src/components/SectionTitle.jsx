import PropTypes from 'prop-types';

export default function SectionTitle({title, order}) {
  
  return (
    <h2 className={`${"section-title"} ${order}`}>
      {title}
    </h2>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired, 
  order: PropTypes.string.isRequired
}