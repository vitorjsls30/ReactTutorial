const userReducer = (state={
  user: {
    id: null,
    name: null,
    age: null
  },
  fetching: false,
  fetched: false,
  error: null
}, action) => {
  switch (action.type) {
    case 'FETCH_USER': {
      return {...state, fetching: true};
    }
    case 'FETCH_USERS_REJECTED': {
      return {...state, fetching: false, error: action.payload};
    }
    case 'FETCH_USER_FULFILLED': {
      console.log('payload...');
      console.log(action.payload);
      return {...state,
        fetching: false,
        fetched: true,
        user: action.payload
      };
    }
    case 'SET_USER_NAME': {
      return state = {...state, name: action.payload};
    }
    case 'SET_USER_AGE': {
      return state = {...state, age: action.payload};
    }
  }
  return state;
};

export default userReducer
