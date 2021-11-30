import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import postReducers from './reducers/postReducers'
import userReducers from './reducers/userReducers'
import authReducers from './reducers/authReducers'


const rootReducers = combineReducers({
    postReducers,
    userReducers,
    authReducers,
})

const initialState = {

}

const middleWare = [thunk]

export const stores = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
) 

export type RootState = ReturnType<typeof stores.getState>