import { combineReducers } from 'redux-immutable'

const changeMeReducer = (state = true, action) => state

export default combineReducers({
  test: changeMeReducer
})
