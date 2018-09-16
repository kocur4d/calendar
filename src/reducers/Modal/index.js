import { combineReducers } from 'redux-immutable'

import visibleReducer from './visible.js'

export const MODAL_TOGGLE = 'MODAL_TOGGLE'

export const modalToggle = () => ({type: MODAL_TOGGLE})

export default combineReducers({
  visible: visibleReducer
})
