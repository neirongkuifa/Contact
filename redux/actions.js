import fetch from 'cross-fetch'
export const ADD_CONTACT = 'ADD_CONTACT'
export const DEL_CONTACT = 'DEL_CONTACT'
export const MODIFY_CONTACT = 'MODIFY_CONTACT'

export const ADD_USER = 'ADD_USER '
export const DEL_USER = 'DEL_USER '
export const MODIFY_USER = 'MODIFY_USER'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT_USER = 'LOGOUT_USER'

export const ADD_RECENT = 'ADD_RECENT'

//Why Action Creator?
//Action  Creator is convinient because you don't need to manually type a full action object yourself
//You just pass the payload of the action to action creator and it automatically return a well defined action object for you
//Of course you can use action object directly if you wish
export const addContact = contact => ({ type: ADD_CONTACT, payload: contact })

export const addRecent = contact => ({ type: ADD_RECENT, payload: contact })

export const loginUser = (username, password) => (dispatch, getState) => {
  dispatch({ type: LOGIN_START })
  fetch('http://192.168.0.44:8000', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then(response => {
    if (response['ok'] === true) {
      dispatch({ type: LOGIN_SUCCESS })
    } else {
      dispatch({ type: LOGIN_FAILED })
    }
  })
}

export const logoutUser = () => (dispatch, getState) => {
  dispatch({ type: LOGOUT_USER })
}
