import { combineReducers } from 'redux-immutable'

import modalReducer from './reducers/Modal'
import eventsReducer from './reducers/Events'

export * from './reducers/Modal'
export * from './reducers/Events'

export default combineReducers({
  modal: modalReducer,
  events: eventsReducer,
})
