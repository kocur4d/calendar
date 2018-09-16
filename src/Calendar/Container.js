import { connect } from 'react-redux'

import Calendar from './Component.js'

import { datesForMonth } from '../lib/date.js'
import { datesToDays } from './datesToDays.js'

const mapStateToProps = (state) => ({
  days: datesToDays(datesForMonth())
})

export default connect(
  mapStateToProps
)(Calendar)
