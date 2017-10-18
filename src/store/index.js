import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'store/thunk'
import * as reducers from 'ducks'

export default function () {
  let middlewares = [thunk]

  if (process.env.NODE_ENV === `development`) {
    const createLogger = require('redux-logger')
    const logger = createLogger({ collapsed: _ => true })
    middlewares.push(logger)
  }

  const store = createStore(
    combineReducers(reducers),
    applyMiddleware(...middlewares)
  )

  return store
}
