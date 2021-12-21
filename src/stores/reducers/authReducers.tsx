import { 
    SIGN_IN_FAILED,
    SIGN_IN_SUCCESS,
    SIGN_OUT,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS, 
    UPDATE_ACCOUNT_FAILED, 
    UPDATE_ACCOUNT_SUCCESS 
} 
from "../constants/authConstants";
import { ADD_FOLLOW, UN_FOLLOW } from "../constants/accountConstants";

import { Auth, action } from "../type";

const initialState: Auth = {
  isSignedIn: false,
  token: "",
  refreshToken: "",
  user: {
      following: [],
      _id: "",
      username: "",
      email: "@gmail.com",
      admin: false,
      bio: "",
      image: ""
  }
};

const authReducers = (state = initialState, action: action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      const { token, refreshToken, user } = action.payload
      return {
        ...state,
        isSignedIn: true,
        token,
        refreshToken,
        user 
      };
    case SIGN_IN_FAILED:
      return {
        ...state,
        isSignedIn: false
      };
    case SIGN_UP_SUCCESS:
      const newUser= action.payload
      return {
        ...state,
        isSignedIn: true,
        isLoading: false,
        user: newUser
      };
    case SIGN_UP_FAILED:
      return state
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        token: "",
        refreshToken: "",
        user: {}
      };
    case ADD_FOLLOW: 
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.concat(action.payload)
        }
      }
      case UN_FOLLOW: 
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(el => el !== action.payload)
        }
      }
    case UPDATE_ACCOUNT_SUCCESS:
      const { image, email, username, bio } = action.payload
      return {
        ...state,
        user: {
          ...state.user,
          image,
          email,
          username,
          bio
        }
      }
    case UPDATE_ACCOUNT_FAILED: 
      return state
    default:
      return state;
  }
};

export default authReducers;
