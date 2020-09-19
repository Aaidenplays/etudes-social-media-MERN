import { combineReducers } from 'redux';
import auth from './auth_reducer';
import app from './app_reducer';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  auth,
  // app
});

export default rootReducer;