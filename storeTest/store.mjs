import 'babel-polyfill'
import redux from 'redux'
import thunk from 'redux-thunk'
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
import reducer from './reducers.mjs'
import * as Action from './actions.mjs'
import fetch from 'cross-fetch'

const store = createStore(reducer, applyMiddleware(thunk))

store.dispatch(Action.fetchStart())
store.dispatch((dispatch, getState) => {
  fetch('https://www.reddit.com/r/nodejs.json')
    .then(response => response.json(), err => dispatch(Action.fetchFailed(err)))
    .then(result => dispatch(Action.fetchSuccess('YES!!!!!!')))
})
