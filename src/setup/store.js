import { configureStore } from "@reduxjs/toolkit";
// import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "Vite-Setup",
  storage,
};

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleware = [thunkMiddleware];

if (import.meta.env.VITE_APP_REDUX_LOGGER != "true") {
  // middleware.push(logger);
}

const store = configureStore({
  reducer: persistedReducer,
  // middleware,
  // ...customizedMiddleware,
});

const persistor = persistStore(store);

export default store;

export { persistor };
