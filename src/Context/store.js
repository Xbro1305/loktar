import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { reCart } from "./Cart";
import { reSize } from "./size";

export const store = configureStore({
  reducer: combineReducers({
    cart: reCart,
    size: reSize,
  }),
  devTools: process.env.NODE_ENV !== "production",
});
