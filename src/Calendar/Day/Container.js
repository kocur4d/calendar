import Immutable from 'immutable'
import { connect } from 'react-redux'

import Day from './Component.js'

import { modalToggle } from '../../reducer.js'

const mapStateToProps = (state, {dayId}) => ({
  events: state
    .getIn(['events', dayId], Immutable.List())
    .sortBy(event => parseInt(event.get('startTime'), 10))
    .toJS()
})

const mapDispatchToProps = (dispatch, {isInPast, dayId}) => ({
  modalToggle: () => !isInPast && dispatch(modalToggle({dayId})),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day)
