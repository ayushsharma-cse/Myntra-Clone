import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slice/product_slice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
