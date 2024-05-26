import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../features/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
