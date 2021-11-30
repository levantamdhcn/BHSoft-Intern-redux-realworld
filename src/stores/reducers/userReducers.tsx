import { LOG_OUT } from '../actions/constant'

export interface User {
    username?: string
    email?: string
    password?: string
}

export interface action {
    type?: string
    payload: string
}

const initialState: User = {

}

const userReducers = (state: User = initialState, action: action) => {
    switch(action.type) {
        default: 
            return state
    }
}

export default userReducers