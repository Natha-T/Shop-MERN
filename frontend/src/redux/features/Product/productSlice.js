import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";





export const getProducts = createAsyncThunk(
"product/getProducts",

async (arg, {rejectWithValue}) => {
  
try {
    const response = await fetch("http://localhost:3002/foods");
   return response.json();

    } catch (error) {
        console.log(error);
        rejectWithValue(error.response.data);
    }


    });
    



export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        loading: false,
        error: null,
        errorMessage: null,
        pending: false,

    },
    
    reducers: {
    
    },
    
    extraReducers: {
        [getProducts.fulfilled]: (state, action) => {
         
            state.products = action.payload;
            state.loading = false;
            state.error = null;
            state.errorMessage = null;
            state.pending = false;
       
        },
        [getProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [getProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.errorMessage = action.error.message;  
        }
    },


});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
