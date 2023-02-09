import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import rootReducer from "./reducers"; // defaults to localStorage for web
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, basketReducer);

export const store = configureStore({
  reducer: {
    basket: persistedReducer,
  },
});
export const  persistor = persistStore(store);















