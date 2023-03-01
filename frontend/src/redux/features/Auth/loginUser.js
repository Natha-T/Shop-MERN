import {createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from 'react-toastify';



     export const loginUser = createAsyncThunk('/loginUser', async (value, { rejectWithValue }) => {
        try {
            const res = await axios.post('http://localhost:3002/login', value );
  
          if (res) {
            toast.success('Login Successfull');
            return res.data;
          }
      
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);
