import React from 'react'
import {Link} from 'react-router-dom'

const SubTitle = ({title, to}) => (
  <div className="sub-title">
    <Link className="close-search" to={to}>Close</Link>
    <h2>{title}</h2>
  </div>
)

export default SubTitle
