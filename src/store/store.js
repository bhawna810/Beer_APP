import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./shopping-cart/favoriteSlice";
import favoriteUISlice from "./shopping-cart/favoriteUISlice";
import productSlice from "./shopping-cart/productSlice";

const store = configureStore({
  reducer: {
    favorite: favoriteSlice.reducer,
    favoriteUi: favoriteUISlice.reducer,
    product: productSlice.reducer
  },
});

export default store;
