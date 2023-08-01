import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

//ตัวแปรใน state
const initialState = {
  data: [],
  cart: [],
  swipeData: [],
  isLoading: false,
};

//reducers คือ function
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.data = action.payload;
    },
    setSwipeProduct: (state, action) => {
      state.swipeData = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    addToCart: (state, action) => {
      const existIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existIndex !== -1) {
        state.cart[existIndex].count += 1;
      } else {
        const payload = { ...action.payload };
        payload["count"] = 1;
        //วิธี push...
        state.cart = [...state.cart, payload];
      }
    },
    removeFromCartByOne: (state, action) => {
      const existIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existIndex !== -1) {
        if (state.cart[existIndex].count > 1) {
          state.cart[existIndex].count -= 1;
        } else {
          state.cart.splice(existIndex, 1);
        }
      }
    },
    removeFromCart: (state, action) => {
      const existIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart.splice(existIndex, 1);
    },
    checkout: (state) => {
      Swal.fire(
        "Checkout Success!",
        "Your order will send to shipping soon!",
        "success"
      );
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setProduct,
  addToCart,
  removeFromCartByOne,
  removeFromCart,
  setSwipeProduct,
  setIsLoading,
  checkout,
} = productSlice.actions;

export default productSlice.reducer;
