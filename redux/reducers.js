import * as Action from './actions.js'
import { combineReducers } from 'redux'

const contactReducer = (state = [], action) => {
  if (action.type === Action.ADD_CONTACT) {
    return [...state, action.payload]
  }
  return state
}

const userReducer = (state = false, action) => {
  switch (action.type) {
    case Action.LOGIN_START:
      return state
    case Action.LOGIN_SUCCESS:
      return true
    case Action.LOGIN_FAILED:
      return false
    case Action.LOGOUT_USER:
      return false
    default:
      return state
  }
}

const recentReducer = (state = [], action) => {
  if (action.type === Action.ADD_RECENT) {
    if (state.length >= 50) {
      state.pop()
    }
    return [action.payload, ...state]
  }
  return state
}

const reducer = combineReducers({
  loginStatus: userReducer,
  contacts: contactReducer,
  recent: recentReducer
})

export default reducer
