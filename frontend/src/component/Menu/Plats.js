import React from 'react'
import './Plats.css'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import { useGetProductsQuery } from '../../redux/features/Product/proSlice'
import { addToCart } from '../../redux/features/Cart/cartSlice'
import {useDispatch} from 'react-redux';

function Plats() {

  const dispatch = useDispatch();

  const {
    isSuccess,
        error,
        isLoading,
        data
        
      } = useGetProductsQuery();
    
      if (error) {
        <p>{error.msg}</p>
      }
    
      if (isLoading) {
        <p>Loading...</p>
      }
    
      if (isSuccess ){
    const products = data
 
    return (
        <section id="dishGrid" data-aos="fade-down">
        <div class="container">
        <h2 class="dishGrid__title">
            Top Dishes
          </h2>
          <div class="dishGrid__wrapper">

        

    {products.map((item) => (
            <div class="dishGrid__item">
            <div class="dishGrid__item__img">
              <img src={item.image} alt="food img"/>
            </div>
            <div class="dishGrid__item__info">
              <h3 class="dishGrid__item__title">
                {item.name}
              </h3>
              <h3 class="dishGrid__item__price"> {item.price}</h3>
              <div class="">
                <button onClick={() => dispatch(addToCart(item))}
                class="btn primary-btn">Add to Cart</button>
              </div>
            </div>
          </div>
          ))}

      
            
          </div>
        </div>
      </section>
    )}
}

export default Plats



