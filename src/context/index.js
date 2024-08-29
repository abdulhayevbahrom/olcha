import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { heartSlice } from "./heartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    heart: heartSlice.reducer,
  },
});
