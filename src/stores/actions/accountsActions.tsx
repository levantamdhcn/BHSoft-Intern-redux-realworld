import { Dispatch } from "react";
import { getAllAccounts } from "../../localStorage";
import { action, User } from "../type";
import { UPDATE_ACCOUNT } from "../constant";

export const updateAccount =
  ({ userId, image, username, email, bio, password }: User) =>
  (dispatch: Dispatch<action>) => {
    const accounts = getAllAccounts();
    if (password !== "") {
      const newAccont = accounts.map((account: User) => {
        if (account.userId === userId) {
          return {
            ...account,
            image,
            email,
            username,
            bio,
            password,
          };
        } else return account;
      });
      localStorage.setItem("accounts", JSON.stringify(newAccont));
      dispatch({
        type: UPDATE_ACCOUNT,
        payload: username,
      });
    } else {
      const newAccont = accounts.map((account: User) => {
        if (account.userId === userId) {
          return {
            ...account,
            image,
            email,
            username,
            bio,
          };
        } else return account;
      });
      localStorage.setItem("accounts", JSON.stringify(newAccont));
      dispatch({
        type: UPDATE_ACCOUNT,
        payload: username,
      });
    }
  };
export const addFollow = (toId: string, fromId: string) => {
  const accounts = getAllAccounts();
  const newAccont = accounts.map((account: User) => {
    if (account.userId === fromId) {
      if (!account.following.includes(toId)) {
        return {
          ...account,
          following: account.following.concat([toId]),
        };
      } else
        return {
          ...account,
          following: account.following.filter((item: string) => item !== toId),
        };
    }
    return account;
  });
  localStorage.setItem("accounts", JSON.stringify(newAccont));
};
