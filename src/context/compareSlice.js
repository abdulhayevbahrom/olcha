import { createSlice } from "@reduxjs/toolkit";

export const compareSlice = createSlice({
  initialState: [],
  name: "compare",
  reducers: {
    addToCompare: (state, action) => {
      if (state.length === 5) {
        state.shift();
      }
      state.push(action.payload);
    },

    removeCompareItem: (state, action) => {
      let id = action.payload;
      return (state = state?.filter((item) => item.id !== id));
    },

    clearCompare: (state, action) => (state = []),
  },
});

export const { addToCompare, removeCompareItem, clearCompare } =
  compareSlice.actions;
