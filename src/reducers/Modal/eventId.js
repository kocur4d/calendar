import { MODAL_TOGGLE } from './index.js'

const initialState = null

export default (state = initialState, action) => {
  switch(action.type) {
    case MODAL_TOGGLE:
      return action.eventId || null
    default:
      return state
  }
}
