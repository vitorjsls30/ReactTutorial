import {createStore} from 'redux';

const reducer = function(state, action) {
  if(action.type == 'INC') {
    return state+action.payload;
  }
  if(action.type == 'DEC') {
    return state-action.payload;
  }
  return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log('Store changed ', store.getState());
});

store.dispatch({type: 'INC', payload: 10});
store.dispatch({type: 'INC', payload: 6});
store.dispatch({type: 'INC', payload: 19});
store.dispatch({type: 'INC', payload: 12});
store.dispatch({type: 'INC', payload: 87});
store.dispatch({type: 'DEC', payload: 5});
