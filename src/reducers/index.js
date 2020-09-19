import { combineReducers } from 'redux';
import auth from './auth';
import app from './app_reducer';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  app
});

export default rootReducer;