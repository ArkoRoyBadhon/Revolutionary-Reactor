import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
  totalPrice: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existing) {
        existing.quantity = existing.quantity + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice += action.payload.price;
      state.total += 1;
    },
    removeOneFromCart: (state,action) => {
      const existing = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existing) {
        existing.quantity = existing.quantity - 1;
        if(existing.quantity <= 0) {
            state.products = state.products.filter(product => product.id !== action.payload.id)
        }
      }
      state.totalPrice -= action.payload.price
    },
    removeToCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.totalPrice -= (action.payload.price * action.payload.quantity)
    },
  },
});

export const { addToCart,removeOneFromCart, removeToCart } = productSlice.actions;
export default productSlice.reducer;
