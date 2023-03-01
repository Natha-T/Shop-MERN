import {createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    loading: false,
    error: false,
    errorMessage: "",
    showAlert: false,
    alertMessage: ""
  },


  reducers: {
  },

  extraReducers: () => { },


});

export default wishlistSlice.reducer;