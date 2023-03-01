import React from 'react'
import './Loginform.css'
import axios from 'axios';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { loadUser,logout } from '../../redux/features/Auth/authSlice';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Loginform() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth)
    const navigate = useNavigate();



    useEffect(() => {
      if (user.userLoaded == true) {
       // navigate('/')
      }
      }, []);
  

    const formik = useFormik({

        initialValues: {
          email: '',
          password: '',
        },

        onSubmit  :  async  (values, res) => {


            try{   
               
       
           
                const user = await axios.post('http://localhost:3002/login', values , {    credentials: true})
        
                if (user) {
                  dispatch(loadUser(user.data.email))
                 
                 
                 
                //  toast.success('Successfully Logged !')
                }
            
         
        
      
              }catch (e) {
                   console.log(e)
                //   toast.error(e)
              }
         
        },


      });





    return (
        <div class='bod'>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>


        <form  onSubmit={formik.handleSubmit}>
            <h3>Login Here</h3>
    
            <label for="username">Email</label>
            <input 
                type="email"
                placeholder="Email " 
                 id="email"
                name="email" 
               onChange={formik.handleChange}
               value={formik.values.email}
            />
    
            <label for="password">Password</label>
            <input 
               type="password" 
               placeholder="Password" 
               id="password"
               name="password"     
               onChange={formik.handleChange}
               value={formik.values.password}  
            />
    
      
            <button type="submit" class="button">Login</button>
  

            <div class="social">
              <div class="go"><i class="fab fa-google"></i>  Google</div>
              <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
            </div>
        </form>


    </div>
    )
}

export default Loginform
