import React from 'react'

import './style.css'

const Event = ({
  modalToggle,
  startTime,
  endTime,
  name,
}) => (
  <p className='event' onClick={(e) => modalToggle(e)}>
  {startTime}:00 - {endTime}:00 {name}
  </p>
)

export default Event
