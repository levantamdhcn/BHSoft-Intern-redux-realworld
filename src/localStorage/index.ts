import { User, Article } from "../stores/type";

export const getUserInforById = (id: string) => {
  let accounts = JSON.parse(localStorage.getItem("accounts") || "[]") || [];
  return accounts.filter((account: User) => account.userId === id);
};
export const getArticleInforById = (id: string) => {
  let articles = JSON.parse(localStorage.getItem("articles") || "[]") || [];
  return articles.filter((article: Article) => article.articleId === id);
};
export const getUserInforByUsername = (username: string) => {
  let accounts = JSON.parse(localStorage.getItem("accounts") || "[]") || [];
  return accounts.filter((account: User) => account.username === username);
};
export const getAllAccounts = () => {
  return JSON.parse(localStorage.getItem("accounts") || "[]") || [];
};
