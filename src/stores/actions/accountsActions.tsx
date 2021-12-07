import { getAllAccounts } from "../../localStorage";
import { User } from "../type";

export const updateAccount = ({
  userId,
  image,
  username,
  email,
  bio,
  password,
}: User) => {
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
    accounts
      .filter((account: User) => account.userId === userId)
      .map((account: User) => ({
        ...account,
        image,
        email,
        username,
        bio,
      }));
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }
};
