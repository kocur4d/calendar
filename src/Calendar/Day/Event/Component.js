import React from 'react'

import './style.css'

const eventName = ({
  startTime,
  endTime,
  name,
}) => `${startTime}:00 - ${endTime}:00 ${name}`

const Event = (props) => (
  <p className='event' onClick={(e) => props.modalToggle(e)}>
    {eventName(props)}
  </p>
)

export default Event
