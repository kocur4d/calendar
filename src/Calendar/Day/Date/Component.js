import React from 'react'
import classNames from 'classnames'

import './style.css'

const Date = ({
  date,
  isInPast,
}) => (
  <p className={classNames('date', {'inpast': isInPast})}>
    {date}
  </p>
)

export default Date
