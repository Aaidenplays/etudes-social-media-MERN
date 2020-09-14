import { combineReducers } from 'redux';
import auth from './auth';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  auth
});

export default rootReducer;