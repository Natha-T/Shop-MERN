import {createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    totalDiscount: 0,
    rating: 0,
   quantity: 0,
  },


  reducers: {

    addToCart: (state, action) => {

      const {id, name, price, image, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
       
        existingItem.quantity += 1 ;
        state.totalItems += +1;
        state.totalPrice += price;
        state.quantity += quantity
   

      } else {
        state.items.push({id, name, price, image, quantity});
        state.totalItems += +1;
        state.totalPrice += price;

      }
    },

    removeFromCart: (state, action) => {
     
      const item = state.items.find((item) => item.id === action.payload.id); 
      if (item > 1) {
          
          state.totalItems -= 1;
          state.totalPrice -= item.price; 
        
      } else {
        state.items= state.items.filter(item => item.id !== action.payload.id);
          state.totalItems -= 1;
          state.totalPrice -= item.price;
     state.quantity -= 1;
       
      }


    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      state.quantity = 0;
    
      
    }

  },

  extraReducers: () => { 

    
      
  },


});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;