import {createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from 'react-toastify';

export const registerUser = createAsyncThunk('/registerUser', async (value , {rejectWithValue}) => {
    
    try {
    const token = await axios.post('http://localhost:3002/register', value);

        localStorage.setItem('token', token.data);
        toast.success('Register Successfull');

        return token.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
        toast.error('Register Failed');
    }
});