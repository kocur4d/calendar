import Immutable from 'immutable'
import { connect } from 'react-redux'

import Modal from './Component.js'

import {
  modalToggle,
  saveEvent,
  updateEvent,
  deleteEvent,
} from '../reducer.js'

const mapStateToProps = (state) => {
  const dayId = state.getIn(['modal', 'dayId'])
  const eventId = state.getIn(['modal', 'eventId'])
  const visible = state.getIn(['modal', 'visible'])
  const events = state.getIn(['events', dayId], Immutable.List())
  const event =
    eventId &&
      events
      .find(event => event.get('eventId') === eventId)
      .toJS()
  return ({
    visible,
    dayId,
    eventId,
    event,
    events: events.toJS()
  })
}

const mapDispatchToProps = (dispatch) => ({
  modalToggle: () => dispatch(modalToggle()),
  saveEvent: (dayId, event) => dispatch(saveEvent(dayId, event)),
  updateEvent: (dayId, eventId, event) => dispatch(updateEvent(dayId, eventId, event)),
  deleteEvent: (dayId, eventId) => dispatch(deleteEvent(dayId, eventId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
