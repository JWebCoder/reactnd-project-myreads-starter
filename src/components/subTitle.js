import React from 'react'
import PropTypes from 'prop-types'

const SubTitle = ({title, history, subtitle}) => (
  <div className='sub-title'>
    <a className='close-search' onClick={() => {history.goBack()}}>Close</a>
    <div className='title-name'>
      <h2>{title}</h2>
      {subtitle && (
        <p>{subtitle}</p>
      )}
    </div>
  </div>
)

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  history: PropTypes.object.isRequired
}

export default SubTitle
