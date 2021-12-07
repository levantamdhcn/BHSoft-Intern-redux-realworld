import { Dispatch } from "react";
import { getAllAccounts } from "../../localStorage";
import { action, User } from "../type";
import { UPDATE_ACCOUNT } from "./constant";

export const updateAccount =
  ({ userId, image, username, email, bio, password }: User) =>
  (dispatch: Dispatch<action>) => {
    const accounts = getAllAccounts();
    if (password !== "") {
      const newAccont = accounts
        .filter((account: User) => account.userId === userId)
        .map((account: User) => ({
          ...account,
          image,
          email,
          username,
          bio,
          password,
        }));
      localStorage.setItem("accounts", JSON.stringify(newAccont));
    } else {
      const newAccont = accounts
        .filter((account: User) => account.userId === userId)
        .map((account: User) => ({
          ...account,
          image,
          email,
          username,
          bio,
        }));
      localStorage.setItem("accounts", JSON.stringify(newAccont));
    }
    dispatch({
      type: UPDATE_ACCOUNT,
      payload: username,
    });
  };
