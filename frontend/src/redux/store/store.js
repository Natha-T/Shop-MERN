import { combineReducers, configureStore } from '@reduxjs/toolkit'

import productReducer from '../features/Product/productSlice'
import wishlistReducer from '../features/Wishlist/wishlistSlice'
import cartReducer from '../features/Cart/cartSlice'
import authReducer from '../features/Auth/authSlice'
import { apiSlice } from '../features/Product/apiSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import {   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";


const persistConfig = {
    key: 'root',
    version : 1 ,
    storage,
  
  }

  const rootReducer = combineReducers({
    
    auth : authReducer,
    product: productReducer,
    cartSlice: cartReducer,
    wishlistSlice: wishlistReducer,
    [ apiSlice.reducerPath ]: apiSlice.reducer
  })
  const persistedReducer = persistReducer(persistConfig,rootReducer)
  
export const store = configureStore({
    reducer:   persistedReducer,
       
         middleware: getDefaultMiddleware => 
         getDefaultMiddleware().concat(apiSlice.middleware),
         devTools: true


        

     })


     export const persistor = persistStore(store)
/*
  

export const store = configureStore({
  reducer: {
    auth : authReducer,
   product: productReducer,
    cartSlice: cartReducer,
    wishlistSlice: wishlistReducer,

[ apiSlice.reducerPath ]: apiSlice.reducer,
  
  }, 
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,

})

*/