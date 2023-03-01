import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'


function PayButton({cart}) {
    console.log(cart);

    const user = useSelector((state) => state.auth)
    console.log(user.email);
    

    const handleCheckout = () =>  {
        axios.post('http://localhost:3002/stripe/create-checkout-session', 
        {cart}, 
        user.email,
         {    credentials: true}).then ((res) => {
            if (res.data){
                window.location.href = res.data.url
            }

        }).catch((err) => console.log(err))
    }
    return (
        <div>
            <button className='btn-' onClick={() => handleCheckout()}>
            Checkout


            </button>
            
        </div>
    )
}

export default PayButton
