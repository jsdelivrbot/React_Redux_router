import { combineReducers } from 'redux';
import authenticationReducre from './authentication';

const rootReducer = combineReducers({
  authenticated: authenticationReducre
});

export default rootReducer;
