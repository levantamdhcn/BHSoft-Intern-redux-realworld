import { combineReducers } from "redux";
import authReducers from "./authReducers";
import articleReducers from "./articleReducers";
import { AppState } from "../type";

export const rootReducers = combineReducers<AppState>({
  authReducers,
  articleReducers,
});
