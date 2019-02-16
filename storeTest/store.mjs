import 'babel-polyfill'
import redux from 'redux'
import thunk from 'redux-thunk'
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
import reducer from './reducers.mjs'
import * as Action from './actions.mjs'
import fetch from 'cross-fetch'

const logger = store => next => action => {
  if (typeof action === 'function') {
    console.log('FETCH_THUNK')
  } else {
    console.log(action.type)
  }
  next(action)
  console.log(store.getState())
}

const store = createStore(reducer, applyMiddleware(logger, thunk.default))

store.dispatch(Action.fetchStart())
store.dispatch((dispatch, getState) => {
  fetch('https://www.reddit.com/r/nodejs.json')
    .then(response => response.json(), err => dispatch(Action.fetchFailed(err)))
    .then(result => dispatch(Action.fetchSuccess('YES!!!!!!')))
})
