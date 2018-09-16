import React from 'react'
import _map from 'lodash/map'
import classNames from 'classnames'

import Date from './Date'
import Event from './Event'

import './style.css'

const Day = ({
  dayId,
  events,
  date,
  isInPast,
  modalToggle,
}) => (
  <div className={classNames('day', {'inpast': isInPast})} onClick={() => modalToggle()}>
    <Date date={date} isInPast={isInPast} />
    {
      _map(events, event => <Event key={event.eventId} {...event} dayId={dayId}/>)
    }
  </div>
)

export default Day
