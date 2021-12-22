import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducers } from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createWhitelistFilter } from "redux-persist-transform-filter";

const middleWare = [thunk];

const saveSubsetWhitelistFilter = createWhitelistFilter("authReducers", [
  "token",
  "refreshToken",
  "user"
]);


const persistConfig = {
  key: "root",
  storage,
  blacklist: ['articleReducers'],
  transforms: [saveSubsetWhitelistFilter],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const stores = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

const persistor = persistStore(stores);

export default persistor;

export type RootState = ReturnType<typeof stores.getState>;
