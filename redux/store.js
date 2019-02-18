import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers.js'
import contacts from '../contact'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const logger = store => next => action => {
  if (typeof action === 'function') {
    console.log('ACTION TYPE:  Function')
  } else {
    console.log('ACTION TYPE: ', action.type)
  }
  next(action)
  console.log('LOGIN STATE: ', store.getState().loginStatus)
}

export const store = createStore(
  persistedReducer,
  { contacts },
  applyMiddleware(thunk)
)
export const persistor = persistStore(store)
