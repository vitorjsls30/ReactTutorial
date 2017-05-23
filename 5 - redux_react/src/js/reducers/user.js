const userReducer = (state={
  fetching: false,
  fetched: false,
  users: [],
  error: null
}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME': {
      state = {...state, name: action.payload};
      break;
    }
    case 'CHANGE_AGE': {
      state = {...state, age: action.payload};
      break;
    }
    case 'USER_ERROR': {
      throw new Error('OMG!!!');
    }
    case 'FETCH_USERS_START': {
      return {...state, fetching: true};
      break;
    }
    case 'FETCH_USERS_ERROR': {
      return {...state, fetching: false, error: action.payload};
      break;
    }
    case 'RECEIVE_USERS': {
      return {...state,
        fetching: false,
        fetched: true,
        users: action.payload
      };
      break;
    }
  }
  return state;
};

export default userReducer
