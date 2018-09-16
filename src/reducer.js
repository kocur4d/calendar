import { combineReducers } from 'redux-immutable'

import modalReducer from './reducers/Modal'
export * from './reducers/Modal'

export default combineReducers({
  modal: modalReducer,
})
