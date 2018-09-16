import React from 'react'

import './style.css'

const Day = ({
  id,
  isInPast,
}) => (
  <div className='day'>
    <p>{id}</p>
    <p>{isInPast && 'YES'}</p>
  </div>
)

export default Day
