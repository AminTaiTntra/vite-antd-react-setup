import { combineReducers } from "redux";
import SidebarMenuReducer from "../redux/reducers/sidebar";
import loginReducer from "../redux/reducers/login";
import languageReducer from "../redux/reducers/language";

const appReducer = combineReducers({
  language: languageReducer,
  login: loginReducer,
  sidebarMenu: SidebarMenuReducer,
});

const rootReducer = (state, action) => {
  let newState = state;
  return appReducer(newState, action);
};

export default rootReducer;
