import { createStore } from 'redux'
import reducer from './reducers.js'
import contacts from '../contact'

const store = createStore(reducer, { contacts })
export default store
