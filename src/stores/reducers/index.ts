import { combineReducers } from "redux";
import authReducers from "./authReducers";
import postReducers from "./postReducers";
import { AppState } from "../type";

export const rootReducers = combineReducers<AppState>({
    authReducers,
    postReducers,
})