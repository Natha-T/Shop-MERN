import React from 'react'
import './Cartcomp.css'
import { clearCart, removeFromCart } from '../../redux/features/Cart/cartSlice'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux';
import PayButton from './PayButton';

function Cartcomp() {

	  const dispatch = useDispatch();
	  const cart = useSelector((state) => state.cartSlice)

	const handleRemove = (id) => {
        dispatch(clearCart())
    }


    return (


        <div class="wrapper">
		<h1>Shopping Cart</h1>
		<div class="project">
			<div class="shop">

			

			

				{cart.items.map((item) => (
				
				<div class="box">
					<img src={item.image}/>
					<div class="content">
						<h3>${item.name}</h3>
						<h4>${item.price}</h4>
						<p class="unit">Quantity : {item.quantity} </p>
						<button  onClick={()=>(dispatch(removeFromCart(item)))} class="btn-area"> Remove</button>
					</div>
					
				</div>

				))}
 
<button onClick={ handleRemove} class="btn"> clearCart</button>
				


				
			</div>
	
            
			<div class="right-bar">
				<p><span>Subtotal  </span> <span></span></p>
				<hr/>
				<p><span>Total Item : {cart.totalItems}</span> <span></span></p>
				<hr/>
				<p><span>Shipping</span> <span></span></p>
				<hr/>
				<p><span>Total:  : {cart.totalPrice}$</span> <span></span></p>
				<PayButton cart = {cart.items}/> 
			
			</div>


		</div> 
	
	</div>
    )
}

export default Cartcomp
/*



	



{










	cart.items.length > 0 &&
	<p class="btn-area"> <span class="btn2" onClick={() => dispatch(clearCart())}>Clear Cart</span></p>

	}

	
	{
		cart.items.length === 0 &&
		<div >
				<h3>
					Your cart is empty
				</h3>
		
		</div>


		 }*/