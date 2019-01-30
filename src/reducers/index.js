import { combineReducers } from "redux";
import turns from "./turns";
import authentication from "./authentication";
console.log(authentication);

export default combineReducers({
  turns,
  authentication
});
