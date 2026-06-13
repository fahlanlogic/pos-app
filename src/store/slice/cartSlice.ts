import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  totalItems: number;
}

const initialState: CartState = {
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCart: (state) => {
      state.totalItems += 1;
    },
    addMultipleItems: (state, action: PayloadAction<number>) => {
      state.totalItems += action.payload;
    },
  },
});

export const { incrementCart, addMultipleItems } = cartSlice.actions;
export default cartSlice.reducer;
