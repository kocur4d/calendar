import { createStore, applyMiddleware, compose } from 'redux'
import Immutable from 'immutable'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducer.js'

const initialState = Immutable.Map()
const middleware = [
  thunk,
  logger
]
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
