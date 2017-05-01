import { combineReducers } from 'redux';
import userReducer from '../reducers/UserReducer';

const reducers = combineReducers({
  users: userReducer
});

export default reducers;