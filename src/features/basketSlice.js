import { createSlice } from "@reduxjs/toolkit";
import { computeHeadingLevel } from "@testing-library/react";

const initialState = {
  urunlar: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    ekle: (state, action) => {
      state.urunlar.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { ekle } = basketSlice.actions;

export default basketSlice.reducer;
