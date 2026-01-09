// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./AuthSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import { apiSlice } from "../services/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
