import React from 'react'
import './Registerform.css'

import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useFormik } from 'formik';



function Registerform() {


  const dispatch = useDispatch();




    const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
          email: '',
        },
        onSubmit: async  (values, res) => {
          try{
            const user = await axios.post('http://localhost:3002/register', values)
      
    
     console.log(user);
          }catch (e) {
               console.log(e)
          }
        

      
        },
      });

    return (
        <div class='bod'>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div> 


            
         
   <form onSubmit={formik.handleSubmit}>
        <h3>Register</h3>

        <label for="username">UserName</label>
          <input type="text"
            placeholder="Name"  
            id="username"
            name="username"      
            onChange={formik.handleChange}
            value={formik.values.username} 
         />
    
        <label for="Email">Email</label>
          <input type="email"
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
     
     <button type="submit" class="button">Register</button>
    </form>    
    </div>
    )
  }

export default Registerform
/*
<Formik
initialValues={{username: "", email: "", password: "",}}
onSubmit={async (values, actions) => {
  try{
  const user = await axios.post('/', values)
  console.log(user)
   } catch (e) {
      console.log(e)
   }

   setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
}} >

{({ values, errors,touched, handleChange, handleBlur, handleSubmit, isSubmitting,       }) => 

(

    )}*/