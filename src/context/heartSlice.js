import { createSlice } from "@reduxjs/toolkit";

export const heartSlice = createSlice({
  initialState: [],
  name: "heart",
  reducers: {
    addToHeart: (state, action) => {
      let hart = action.payload;
      let result = [...state, hart]
      localStorage.getItem("wishes", JSON.stringify(result))
      return result
    },
    removeFromHeart: (state, action) => {
      let id = action.payload;
      let result = state.filter((item) => item.id !== id);
      localStorage.setItem("heart", JSON.stringify(result));
      return result;
    },
    clearHart: () => { },
  }
})

export const { addToHeart, removeFromHeart, clearHart } = heartSlice.actions;