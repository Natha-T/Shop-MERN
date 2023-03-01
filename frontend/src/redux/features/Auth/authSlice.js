
import { createSlice }  from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { loginUser } from './loginUser';
import { registerUser } from './registerUser';

import { toast } from 'react-hot-toast';




const initialState = {
 
    email : "",
    userLoaded : false,
};






const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        loadUser : (state, action) => {
        
        if(action.payload) {
       
        
            state.email = action.payload;
            state.userLoaded = true;
            toast.success('Successfully Logged !')
        } else {
            state.userLoaded = false;
            toast.error('Failed Login')
        }
    },

    logout : (state, action) => {
      
 
        state.email = "";
        state.userLoaded = false;
        toast.success('Successfully Log Out !')

    }

    },

});



export const {loadUser, logout} = authSlice.actions;

export default authSlice.reducer;