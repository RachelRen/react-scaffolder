import { combineReducers } from "redux";
import counter from './index';
import { routerReducer } from "react-router-redux";
export const reducers = combineReducers({
  routing: routerReducer,
  counter
});