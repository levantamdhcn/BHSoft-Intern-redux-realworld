import { GET_POST,ADD_POST } from '../actions/type'

export interface Post {
    title?: string
    description?: string
    body?: string
    createdAt?: string
    tagList?: Array<string>[]
    author?: {
        username?: string
        image?: string
    } 
}

export interface Posts extends Array<Post>{}

export interface action {
    type?: string
    payload: [

    ]
}

const initialState: Posts = [

]

const postReducers = (state: Posts = initialState, action: action) => {
    switch(action.type) {
        case GET_POST: 
            let newState = state.slice(0)
            return newState.concat( action.payload )
        case ADD_POST: 
            console.log('ADD_POST')
            return state
        default: 
            return state
    }
}

export default postReducers