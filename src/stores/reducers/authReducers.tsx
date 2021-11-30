import { SIGN_IN, LOG_OUT, SIGN_IN_SUCCESS } from '../actions/constant'

export interface Auth {
    token?: {
        authenticated: boolean
        user: string
    }
}

export interface action {
    type?: string
    payload: Auth
}

const initialState: Auth = {
    token: {
        authenticated: false,
        user: ''
    }
}

const authReducers = (state: Auth = initialState, action: action) => {
    switch(action.type) {
        case SIGN_IN:
            return {
                ...state,
                token: action.payload
            }
        case SIGN_IN_SUCCESS:
            console.log('a')
            return {
                ...state,
                token: {
                    ...state.token,
                    authenticate: true,
                }
            }
        case LOG_OUT: 
            return {
                ...state,
                token: {
                    ...state.token,
                    authenticate: false,
                    user: ''
                }
            }
        default: 
            return state
    }
}

export default authReducers