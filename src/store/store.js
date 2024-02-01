import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favorite-page/favoriteSlice";
import favoriteUISlice from "./favorite-page/favoriteUISlice";
import productSlice from "./favorite-page/productSlice";

const store = configureStore({
  reducer: {
    favorite: favoriteSlice.reducer,
    favoriteUi: favoriteUISlice.reducer,
    product: productSlice.reducer
  },
});

export default store;
