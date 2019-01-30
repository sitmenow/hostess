import { authenticationActions } from "../actions/actionTypes";

const authentication = (state = {}, action) => {
  switch (action.type) {
    case authenticationActions.LOGIN_REQUEST:
      return {
        logginIn: true,
        user: action.user
      };
    case authenticationActions.LOGIN_SUCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case authenticationActions.LOGIN_FAILURE:
      return {};
    case authenticationActions.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authentication;
