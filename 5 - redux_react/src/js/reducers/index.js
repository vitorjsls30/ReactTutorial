import {combineReducers} from 'redux';
import user from './user';
import tweets from './tweets';

export const reducers = combineReducers({
  user,
  tweets
});

export default reducers
