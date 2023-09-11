// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { rootReducer } from "./combineReducers";
import thunk from "redux-thunk";
import { HYDRATE } from "next-redux-wrapper";

const hydrateReducer = (state, action) => {
  if (action.type === HYDRATE) {
    // Merge the incoming state with the existing state
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return state;
  }
};

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [
    // "notification",
  ], //list of reducers not to save in the cache
  whilelist: ["auth", "user", "admin"], //list of reducers to save in the cache
  // version:1
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // [HYDRATE]: hydrateReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
