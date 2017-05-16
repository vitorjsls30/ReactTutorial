import {createStore} from 'redux';
import {reducers} from './reducers';

const store = createStore(reducers);

store.subscribe(() => {
  console.log('Store changed ', store.getState());
});

store.dispatch({type: 'CHANGE_NAME', payload: 'Vitor José'});
store.dispatch({type: 'CHANGE_AGE', payload: 28});
store.dispatch({type: 'CHANGE_AGE', payload: 29});
