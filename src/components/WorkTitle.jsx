import PropTypes from 'prop-types';

export default function WorkTitle({position, company, start_date, end_date}) {
  return (
    <div className="mb-3">
      <h3 className="job-title">{position}<span className="job-company"> @ {company}</span></h3>
      <small className='job-dates'>{start_date} - {end_date}</small>
    </div>
  )
}

WorkTitle.propTypes = {
  position: PropTypes.string.isRequired, 
  company: PropTypes.string.isRequired, 
  start_date: PropTypes.string.isRequired,
  end_date: PropTypes.string.isRequired
}