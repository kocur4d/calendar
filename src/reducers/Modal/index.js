import { combineReducers } from 'redux-immutable'

import visibleReducer from './visible.js'
import dayIdReducer from './dayId.js'
import eventIdReducer from './eventId.js'

export const MODAL_TOGGLE = 'MODAL_TOGGLE'

export const modalToggle = ({dayId, eventId} = {}) => ({type: MODAL_TOGGLE, dayId, eventId})

export default combineReducers({
  visible: visibleReducer,
  dayId: dayIdReducer,
  eventId: eventIdReducer,
})
