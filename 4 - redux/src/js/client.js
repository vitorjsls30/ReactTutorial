import {applyMiddleware, createStore} from 'redux';
import {reducers} from './reducers';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log('AHHH!!!', e);
  }
}

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducers, middleware);

store.dispatch((dispatch) => {
  dispatch({type: 'FETCH_USERS_START'});
  axios.get('http://rest.learndfsdgsdgcode.academy/api/learncode/friends')
  .then((response) => {
    dispatch({type: 'RECEIVE_USERS', payload: response.data})
  })
  .catch((err) => {
    dispatch({type: 'FETCH_USERS_ERROR', payload: err});
  });
});
