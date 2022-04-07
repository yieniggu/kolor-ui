import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
// import { calendarReducer } from "./calendarReducer";
import { uiReducer } from "./uiReducer";

// All reducers used combined in one
export const rootReducer = combineReducers({
  ui: uiReducer,
  //calendar: calendarReducer,
  auth: authReducer,
});
