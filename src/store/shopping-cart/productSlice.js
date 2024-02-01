import { createSlice } from "@reduxjs/toolkit";

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
            const existingItems = state.productItems.length;
      
            if (existingItems === 0) {
              state.productItems = newItem;
            } 
      
            setProduct(newItem);
          },
    },
  });
  
  export const productActions = productSlice.actions;
  export default productSlice;