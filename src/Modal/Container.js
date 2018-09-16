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
  const event =
    eventId &&
    state
      .getIn(['events', dayId])
      .find(event => event.get('eventId') === eventId)
      .toJS()
  return ({
    visible,
    dayId,
    eventId,
    event,
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
