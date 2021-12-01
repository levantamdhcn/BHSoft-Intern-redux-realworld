import { Action, AnyAction, Dispatch } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { RootState } from "../stores"
import { GET_POST, SIGN_IN_FAILED, SIGN_IN_SUCCESS, SIGN_OUT, SIGN_UP_FAILED, SIGN_UP_SUCCESS } from "./constant"
import { User } from '../index'

interface SignInState {
    email: string
    password: string
}

export const signUpAction = (email: string, username: string, password: string) => (dispatch: Dispatch<Action>) => {
    let accounts = JSON.parse(localStorage.getItem('accounts') || '[]') || []
    accounts.push({
        email,
        username,
        password
    })
    let dupplicateAccounts = accounts.filter((item: User) => item.email === email || item.username === username)
    if (dupplicateAccounts.length === 0) {
        localStorage.setItem('accounts', JSON.stringify(accounts))
        dispatch({
            type: SIGN_UP_SUCCESS,
            payload: {
                authenticated: true,
                username: username
            }
        })
    }
    else {
        dispatch({
            type: SIGN_UP_FAILED,
            payload: {
                authenticated: true,
                username: username
            }
        })
    }
}


export const signInAction = (email: string, password: string) => (dispatch: Dispatch<Action>) => {
    let accounts = JSON.parse(localStorage.getItem('accounts') || '{}') || []
    const currentUser = accounts.filter((item: User) => item.email === email && item.password === password) 
    console.log(currentUser)
    if (currentUser.length > 0) {
        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: {
                authenticated: true,
                username: currentUser.username
            }
        })
    }
    else {
        dispatch({
            type: SIGN_IN_FAILED,
            payload:  {
                authenticated: false,
                username: undefined
            }
        })
    }
    
}

export const signOutAction = ({ email, password }: SignInState) => (dispatch: Dispatch<Action>) => {
    dispatch({
        type: SIGN_OUT,
        payload: {
            authenticated: false,
            username: undefined
        }
    })
}