import { createActions } from "reduxsauce";

export const { Types: RootTypes, Creators: RootActions } = createActions({
  userSignIn: ["userProfile", "accessToken"],
  logout: null,
});

export const initialState = {
  userProfile: null,
  accessToken: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case RootTypes.USER_SIGN_IN:
      return {
        ...state,
        userProfile: action.userProfile,
        accessToken: action.accessToken,
      };
    case RootTypes.LOGOUT:
      return {
        ...state,
        userProfile: null,
        accessToken: null,
      };
    default:
      return state;
  }
};
