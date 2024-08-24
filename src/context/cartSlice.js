import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      return (state = [...state, { ...action.payload, quantity: 1 }]);
    },

    increment: (state, action) => {
      let id = action.payload;

      return (state = state.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    },

    decrement: (state, action) => {
      let id = action.payload;

      return (state = state.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    },

    removeCartItem: (state, action) => {
      let id = action.payload;
      return (state = state?.filter((item) => item.id !== id));
    },
  },
});

export const { addToCart, increment, decrement, removeCartItem } =
  cartSlice.actions;
