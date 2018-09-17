import Immutable from 'immutable'

export const SAVE_EVENT = 'SAVE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

const initialState = Immutable.Map()

export const saveEvent = (dayId, event) => ({
  type: SAVE_EVENT,
  dayId,
  event,
})

export const updateEvent = (dayId, eventId, event) => ({
  type: UPDATE_EVENT,
  dayId,
  eventId,
  event,
})

export const deleteEvent = (dayId, eventId) => ({
  type: DELETE_EVENT,
  dayId,
  eventId,
})

export default (state = initialState, action) => {
  switch(action.type) {
    case SAVE_EVENT:
      return state.updateIn(
        [action.dayId],
        Immutable.List(),
        (events) => events.push(Immutable.fromJS(action.event))
      )
    case UPDATE_EVENT:
      return state.updateIn(
        [action.dayId],
        Immutable.List(),
        (events) => events
          .filter(event => event.get('eventId') !== action.eventId)
          .push(Immutable.fromJS(action.event))
      )
    case DELETE_EVENT:
      return state.updateIn(
        [action.dayId],
        Immutable.List(),
        (events) => events
          .filter(event => event.get('eventId') !== action.eventId)
      )
    default:
      return state
  }
}
