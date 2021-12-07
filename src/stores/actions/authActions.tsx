import { Action, Dispatch } from "redux";
import {
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP_FAILED,
} from "./constant";
import { User } from "../type";

export const signUpAction =
  (email: string, username: string, password: string) =>
  (dispatch: Dispatch<Action>) => {
    let accounts = JSON.parse(localStorage.getItem("accounts") || "[]") || [];
    let dupplicateAccounts = accounts.filter(
      (item: User) => item.email === email || item.username === username
    );
    if (dupplicateAccounts.length === 0) {
      const userId = Math.random().toString(36).substr(2, 9);
      const bio = "";
      const following: string[] = [];
      accounts.push({
        userId,
        email,
        username,
        password,
        bio,
        following,
        image: "https://api.realworld.io/images/smiley-cyrus.jpeg",
      });
      localStorage.setItem("accounts", JSON.stringify(accounts));
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {
          authenticated: true,
          userId: userId,
          username: username,
        },
      });
    } else {
      dispatch({
        type: SIGN_UP_FAILED,
        payload: {
          authenticated: false,
          userId: undefined,
          username: undefined,
          errorMsg: [
            "email has already been taken",
            "username has already been taken",
          ],
        },
      });
    }
  };

export const signInAction =
  (email: string, password: string) => (dispatch: Dispatch<Action>) => {
    let accounts = JSON.parse(localStorage.getItem("accounts") || "{}") || [];
    const currentUser = accounts.filter(
      (item: User) => item.email === email && item.password === password
    );
    if (currentUser.length > 0) {
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {
          authenticated: true,
          userId: currentUser[0].userId,
          username: currentUser[0].username,
        },
      });
    } else {
      dispatch({
        type: SIGN_IN_FAILED,
        payload: {
          authenticated: false,
          userId: undefined,
          username: undefined,
          errorMsg: ["email or password is invalid"],
        },
      });
    }
  };

export const signOutAction = (dispatch: Dispatch<Action>) => {
  dispatch({
    type: SIGN_OUT,
    payload: {
      authenticated: false,
      userId: undefined,
      username: undefined,
    },
  });
};
