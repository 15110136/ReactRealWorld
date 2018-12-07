import { combineReducers } from "redux";
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectReducer,
  profiles:profileReducer
});
export default rootReducer;