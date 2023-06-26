import { combineReducers } from "redux";

import studentReducer from "./student/reducer";
import countReducer from "./reducer";
import recordReducer from "./record/reducer";
export default combineReducers({ studentReducer, countReducer, recordReducer})