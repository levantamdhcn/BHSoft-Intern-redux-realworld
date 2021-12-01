import { ThunkDispatch } from "redux-thunk"
import { Action, AnyAction, Dispatch } from "redux"
import { RootState } from "../stores"
import { signIn } from '../../axios/index'
import { SIGN_UP_FAILED, SIGN_UP_SUCCESS } from "./constant"
import { User } from ".."


