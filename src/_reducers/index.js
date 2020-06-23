import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { tools } from './tools.reducer';
import { creation } from './creation.reducer';


const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  creation,  
  tools,
});

export default rootReducer;