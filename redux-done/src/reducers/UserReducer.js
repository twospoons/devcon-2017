const defaultState = {
  users: [],
  error: null,
  fetching: false,
  fetched: false
}

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case "USERS_FETCH_PENDING": {
      return {...state, fetching: true}
    }
    case "USERS_FETCH_FULFILLED": {
      return {...state, fetching: false, fetched: true, users: action.payload.data}
    }
    case "USERS_FETCH_REJECTED": {
      return {...state, fetching: false, fetched: false, error: action.payload}
    }
    default: {
      break;
    }
  }
  return state;
}

export default userReducer;