import * as Action from "./actions.js";
import { combineReducers } from "redux";

const contactReducer = (state = [], action) => {
  if (action.type === Action.ADD_CONTACT) {
    return [...state, action.payload];
  }
  return state;
};

const userReducer = (state = [], action) => {
  if (action.type === Action.ADD_USER) {
    return [...state, action.payload];
  }
  return state;
};

const recentReducer = (state = [], action) => {
  if (action.type === Action.ADD_RECENT) {
    if (state.length >= 50) {
      state.pop();
    }
    return [action.payload, ...state];
  }
  return state;
};

const reducer = combineReducers({
  users: userReducer,
  contacts: contactReducer,
  recent: recentReducer
});

export default reducer;
