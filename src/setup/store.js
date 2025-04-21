import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "Vite-Setup",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
          "persist/FLUSH",
        ],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export default store;

export { persistor };