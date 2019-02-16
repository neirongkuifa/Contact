export const ADD_CONTACT = 'ADD_CONTACT'
export const DEL_CONTACT = 'DEL_CONTACT'
export const MODIFY_CONTACT = 'MODIFY_CONTACT'

export const ADD_USER = 'ADD_USER '
export const DEL_USER = 'DEL_USER '
export const MODIFY_USER = 'MODIFY_USER'

export const ADD_RECENT = 'ADD_RECENT'

//Why Action Creator?
//Action  Creator is convinient because you don't need to manually type a full action object yourself
//You just pass the payload of the action to action creator and it automatically return a well defined action object for you
//Of course you can use action object directly if you wish
export const addContact = contact => ({ type: ADD_CONTACT, payload: contact })

export const addUser = user => ({ type: ADD_USER, payload: user })

export const addRecent = contact => ({ type: ADD_RECENT, payload: contact })
