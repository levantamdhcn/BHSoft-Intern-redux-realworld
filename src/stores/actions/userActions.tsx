import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "redux"
import { RootState } from "../stores"
import { signIn } from '../../axios/index'
import { SIGN_IN,GET_POST,SIGN_IN_SUCCESS } from "./constant"

interface SignInState {
    email: string
    password: string
}

export const signInAction = (email: string, password: string) => async(dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    try {
        const response = await signIn({ email,password})
        const data = response.data
        dispatch({
            type: SIGN_IN,
            payload: data
        })
        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const signOutAction = ({ email, password }: SignInState) => async(dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    try {
        const response = await signIn({ email,password})
        const data = response.data
        dispatch({
            type: GET_POST,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}
