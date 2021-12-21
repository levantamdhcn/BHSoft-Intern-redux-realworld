import { Action, Dispatch } from "redux";
import { login, logout, register } from "../../axios/authApis";
import { SIGN_UP_SUCCESS } from "../constants/authConstants";
import { History } from 'history';
import {
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP_FAILED,
} from "../constants";

export const signUpAction = (email: String, username: String, password: String, history: History) => async (dispatch: Dispatch<Action>) => {
  try {
    const response = await register(email, username, password)
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: response.data
    })
    history.push("/signin")
  } catch (error) {
    dispatch({
      type: SIGN_UP_FAILED,
      payload: {
        isSignedIn: false
      }
    })
  }
}

export const signInAction = (email: string, password: string, history: History) => async (dispatch: Dispatch<Action>) => {
  try {
    const respones = await login(email, password)
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: respones.data
    })
    history.push("/")
  } catch (error) {
    dispatch({
      type: SIGN_IN_FAILED,
      payload: {
        isSignedIn: false
      }
    })
  }
}

export const signOutAction = (token: string, history: History) => async (dispatch: Dispatch<Action>) => {
  const response = await logout(token)
  dispatch({
    type: SIGN_OUT,
    payload: response.data
  }) 
  history.push("/")
}