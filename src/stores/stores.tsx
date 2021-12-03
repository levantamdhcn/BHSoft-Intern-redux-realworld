import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducers } from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createBlacklistFilter } from 'redux-persist-transform-filter'

const middleWare = [thunk]

const saveSubsetBlacklistFilter = createBlacklistFilter(
    'authReducers',
    ['signInErrorMsg', 'signUpErrorMsg','username']
);

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['postReducers'],
    transforms: [
        saveSubsetBlacklistFilter
    ]
}

const persistedReducer = persistReducer(persistConfig, rootReducers)


export const stores = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

const persistor = persistStore(stores) 

export default persistor

export type RootState = ReturnType<typeof stores.getState>