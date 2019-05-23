import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { reducer as form } from "redux-form";

// Reducers
import { employees } from "./employees";

const appReducer = combineReducers({
  routing,
  form,
  employees
});

export default appReducer;
