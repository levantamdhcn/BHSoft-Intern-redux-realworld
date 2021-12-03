import { SIGN_OUT, SIGN_IN_SUCCESS, SIGN_IN_FAILED, SIGN_UP_SUCCESS, SIGN_UP_FAILED } from '../actions/constant'
import { Auth, action } from '../type'

const initialState: Auth = {
    isSigninSuccess: false,
    signInErrorMsg: [],
    signUpErrorMsg: [],
    currentUser: {
        authenticated: false,
        username: ''
    }
}

const authReducers = (state = initialState, action: action) => {
    switch(action.type) {
        case SIGN_IN_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isSigninSuccess: true,
                currentUser: {
                    ...state.currentUser,
                    authenticated: action.payload.authenticated,
                    username: action.payload.username,
                }
            }
        case SIGN_IN_FAILED:
            return {
                ...state,
                isSignInSuccess: false,
                signInErrorMsg: action.payload.errorMsg,
                currentUser: {
                    ...state.currentUser,
                    authenticate: false,
                    username: undefined
                }
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isSignInSuccess: true,
                currentUser: {
                    ...state.currentUser,
                    authenticated: true,
                    username: action.payload.username
                }
            }
        case SIGN_UP_FAILED:
            return {
                ...state,
                isSignUpSuccess: false,
                signUpErrorMsg: action.payload.errorMsg,
                currentUser: {
                    ...state.currentUser,
                    authenticated: false,
                }
            }
        case SIGN_OUT: 
            return {
                ...state,
                token: {
                    ...state.currentUser,
                    authenticated: false,
                    username: ''
                }
            }
        default: 
            return state
    }
}

export default authReducers