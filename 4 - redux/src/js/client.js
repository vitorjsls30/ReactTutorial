import {applyMiddleware, createStore} from 'redux';
import {reducers} from './reducers';

const logger = (store) => (next) => (action) => {
  console.log('action fired: ', action);
  next(action);
}

const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log('AHHH!!!', e);
  }
}

const middleware = applyMiddleware(logger, error);

const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log('Store changed ', store.getState());
});

store.dispatch({type: 'CHANGE_NAME', payload: 'Vitor José'});
store.dispatch({type: 'CHANGE_AGE', payload: 28});
store.dispatch({type: 'CHANGE_AGE', payload: 29});
store.dispatch({type: 'USER_ERROR'});
