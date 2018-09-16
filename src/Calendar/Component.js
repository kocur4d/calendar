import React from 'react'
import _map from 'lodash/map'

import Day from './Day'

import './style.css'

const Calendar = ({
  days
}) => (
  <div className='calendar'>
    <p>Monday</p>
    <p>Tuesday</p>
    <p>Wedensday</p>
    <p>Thursday</p>
    <p>Friday</p>
    <p>Saturday</p>
    <p>Sunday</p>
    {
      _map(days, (day) => <Day key={day.id} {...day} />)
    }
  </div>
)

export default Calendar
