import { GET_POST,ADD_POST } from '../actions/constant'
import { Posts, action } from '../type'

const initialState: Posts = [

]

const postReducers = (state = initialState, action: action) => {
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