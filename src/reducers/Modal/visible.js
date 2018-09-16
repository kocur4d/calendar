import { MODAL_TOGGLE } from './index.js'

const initialState = false

export default (state = initialState, action) => {
  switch(action.type) {
    case MODAL_TOGGLE:
      return !state
    default:
      return state
  }
}
