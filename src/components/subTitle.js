import React from 'react'

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

export default SubTitle
