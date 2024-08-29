import { createSlice } from "@reduxjs/toolkit";

export const heartSlice = createSlice({
  initialState: JSON.parse(localStorage.getItem("wishes")) || [],
  name: "heart",
  reducers: {
    addToHeart: (state, action) => {
      let hart = action.payload;
      let result = [...state, hart];
      localStorage.setItem("wishes", JSON.stringify(result));
      return result;
    },
    removeFromHeart: (state, action) => {
      let id = action.payload;
      let result = state.filter((item) => item.id !== id);
      localStorage.setItem("wishes", JSON.stringify(result));
      return result;
    },
    clearHart: () => {},
  },
});

export const { addToHeart, removeFromHeart, clearHart } = heartSlice.actions;
