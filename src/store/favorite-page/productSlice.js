import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
// import { useState } from "react";

const itemss =
  localStorage.getItem("productItems") !== null
    ? JSON.parse(localStorage.getItem("productItems"))
    : [];

const setProduct = (item) => {
  localStorage.setItem("productItems",  JSON.stringify(item));
};

const initialState = {
    productItems: itemss
};
// console.log("Heelo productslice" + initialState.productItems.length);


const productSlice = createSlice({
    name: "product",
    initialState,
   
    reducers: {
       

        addProduct(state, action) {
           
            const newItem = action.payload;
            // console.log("Heelo productslice" + newItem);
            // const existingItems = state.productItems.length;
      
            // if (existingItems === 0) {
            //   state.productItems. = newItem;
            // } 
            // newItem.foreach((item) => {
            //   state.productItems.push(item);
            // })

            state.productItems = [...state.productItems, ...newItem];
            setProduct(state.productItems);
          },
    },
  });
  
  export const productActions = productSlice.actions;
  export default productSlice;