import { SIGN_IN, SIGN_OUT, SIGN_IN_SUCCESS, SIGN_IN_FAILED, SIGN_UP_SUCCESS, SIGN_UP_FAILED } from '../actions/constant'

export interface Auth {
    isSigninSuccess?: boolean
    isSignUpSuccess?: boolean
    currentUser?: {
        authenticated: boolean
        username?: string
    }
}

export interface action {
    type?: string
    payload: {
        authenticated: boolean
        username?: string
    }
}

const initialState: Auth = {
    isSigninSuccess: true,
    isSignUpSuccess: true,
    currentUser: {
        authenticated: false,
        username: undefined
    }
}

const authReducers = (state: Auth = initialState, action: action) => {
    switch(action.type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    authenticated: true,
                    username: action.payload.username,
                }
            }
        case SIGN_IN_FAILED:
            return {
                ...state,
                isSignInSuccess: false,
                currentUser: {
                    ...state.currentUser,
                    authenticate: false,
                }
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isSignUpSuccess: true,
                currentUser: {
                    ...state.currentUser,
                    authenticate: true,
                }
            }
        case SIGN_UP_FAILED:
            return {
                ...state,
                isSignUpSuccess: false,
                currentUser: {
                    ...state.currentUser,
                    authenticate: false,
                }
            }
        case SIGN_OUT: 
            return {
                ...state,
                token: {
                    ...state.currentUser,
                    authenticate: false,
                    user: ''
                }
            }
        default: 
            return state
    }
}

export default authReducers