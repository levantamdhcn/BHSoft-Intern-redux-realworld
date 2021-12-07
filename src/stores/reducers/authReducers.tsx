import {
  SIGN_OUT,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,
  UPDATE_ACCOUNT,
} from "../actions/constant";
import { Auth, action } from "../type";

const initialState: Auth = {
  isSigninSuccess: false,
  signInErrorMsg: [],
  signUpErrorMsg: [],
  currentUser: {
    authenticated: false,
    userId: "",
    username: "",
  },
};

const authReducers = (state = initialState, action: action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isSigninSuccess: true,
        currentUser: {
          ...state.currentUser,
          authenticated: action.payload.authenticated,
          userId: action.payload.userId,
          username: action.payload.username,
        },
      };
    case SIGN_IN_FAILED:
      return {
        ...state,
        isSignInSuccess: false,
        signInErrorMsg: action.payload.errorMsg,
        currentUser: {
          ...state.currentUser,
          authenticate: false,
          userId: undefined,
        },
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSignInSuccess: true,
        currentUser: {
          ...state.currentUser,
          authenticated: true,
          userId: action.payload.userId,
          username: action.payload.username,
        },
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        isSigninSuccess: false,
        signUpErrorMsg: action.payload.errorMsg,
        currentUser: {
          ...state.currentUser,
          authenticated: false,
        },
      };
    case SIGN_OUT:
      return {
        ...state,
        isSigninSuccess: false,
        currentUser: {
          ...state.currentUser,
          authenticated: false,
          userId: undefined,
          username: undefined,
        },
      };
    case UPDATE_ACCOUNT:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          username: action.payload,
        },
      };
    default:
      return state;
  }
};

export default authReducers;
