import { connect } from 'react-redux'

import Calendar from './Component.js'

// TODO: move this to reducer add ability to switch months
import { datesForMonth } from '../lib/date.js'
import { datesToDays } from './datesToDays.js'

const mapStateToProps = (state) => ({
  days: datesToDays(datesForMonth())
})

export default connect(
  mapStateToProps,
)(Calendar)
