export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'

export const fetchStart = () => {
  return {
    type: FETCH_POSTS_REQUEST,
    payload: null
  }
}

export const fetchSuccess = response => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: response
  }
}

export const fetchFailed = err => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: err
  }
}
