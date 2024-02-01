import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("favoriteItems") !== null
    ? JSON.parse(localStorage.getItem("favoriteItems"))
    : [];

const totalAmount =
  localStorage.getItem("favoriteTotalAmount") !== null
    ? JSON.parse(localStorage.getItem("favoriteTotalAmount"))
    : 0;

const totalQuantity =
  localStorage.getItem("favoriteTotalQuantity") !== null
    ? JSON.parse(localStorage.getItem("favoriteTotalQuantity"))
    : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("favoriteItems", JSON.stringify(item));
  localStorage.setItem("favoriteTotalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("favoriteTotalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
  favoriteItems: items,
  favoriteTotalQuantity: totalQuantity,
  favoriteTotalAmount: totalAmount,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,

  reducers: {
    // =========== add item ============
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.favoriteItems.find(
        (item) => item.id === newItem.id
      );
      state.favoriteTotalQuantity++;

      if (!existingItem) {

        state.favoriteItems.push({
          id: newItem.id,
          name: newItem.name,
          image_url: newItem.image_url,
          price: newItem.ibu,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.favoriteTotalAmount = state.favoriteItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),

        0
      );

      setItemFunc(
        state.favoriteItems.map((item) => item),
        state.favoriteTotalAmount,
        state.favoriteTotalQuantity
      );
    },

    // ========= remove item ========

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.favoriteItems.find((item) => item.id === id);
      state.favoriteTotalQuantity--;

      if (existingItem.quantity === 1) {
        state.favoriteItems = state.favoriteItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      state.favoriteTotalAmount = state.favoriteItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      setItemFunc(
        state.favoriteItems.map((item) => item),
        state.favoriteTotalAmount,
        state.favoriteTotalQuantity
      );
    },

    //============ delete item ===========

    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.favoriteItems.find((item) => item.id === id);

      if (existingItem) {
        state.favoriteItems = state.favoriteItems.filter((item) => item.id !== id);
        state.favoriteTotalQuantity = state.favoriteTotalQuantity - existingItem.quantity;
      }

      state.favoriteTotalAmount = state.favoriteItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setItemFunc(
        state.favoriteItems.map((item) => item),
        state.favoriteTotalAmount,
        state.favoriteTotalQuantity
      );
    },
  },
});

export const favoriteActions = favoriteSlice.actions;
export default favoriteSlice;
