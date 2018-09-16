import React from 'react'
import classNames from 'classnames'

import Date from './Date'

import './style.css'

const Day = ({
  date,
  isInPast,
  modalToggle,
}) => (
  <div className={classNames('day', {'inpast': isInPast})} onClick={() => modalToggle()}>
    <Date date={date} isInPast={isInPast} />
  </div>
)

export default Day
