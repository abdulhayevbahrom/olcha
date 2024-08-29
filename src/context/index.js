import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { compareSlice } from "./compareSlice";
import { heartSlice } from "./heartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    compare: compareSlice.reducer,
    heart: heartSlice.reducer,
  },
});
