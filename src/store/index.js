import { combineReducers } from "redux";
import { createNavigationReducer } from "react-navigation-redux-helpers";
import authReducer from "./Auth/reducers";
import AppNavigator from "../appRouteConfig";

const navReducer = createNavigationReducer(AppNavigator);
const rootReducer = combineReducers({
  nav: navReducer,
  auth: authReducer
});
export default rootReducer;
