import * as Action from './actions.mjs'

const reducer = (
  state = { isFetching: false, posts: null, error: null },
  action
) => {
  switch (action.type) {
    case Action.FETCH_POSTS_REQUEST:
      return { ...state, isFetching: true }
    case Action.FETCH_POSTS_SUCCESS:
      return { ...state, isFetching: false, posts: action.payload }
    case Action.FETCH_POSTS_FAILURE:
      return { ...state, isFetching: false, error: action.payload }
    default:
      return state
  }
}

export default reducer
