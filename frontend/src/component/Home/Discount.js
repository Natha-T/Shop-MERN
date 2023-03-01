import React from 'react'
import { useGetProductsQuery } from '../../redux/features/Product/proSlice'

import './Discount.css'

function Discount() {
   
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


    return (
        <section id="discount" data-aos="fade-up">
        <div class="container">
          <div class="discount__wrapper">
            <div class="discount__images">
              <div class="discount__img1">
                <img src={data[0].image} alt="food img" />
              </div>
              <div class="discount__img2">
                <img src={data[1].image} alt="food img" />
              </div>
              <div class="discount__img3">
                  <img src={data[2].image} alt="food img" />
              </div>
            </div>
            <div class="discount__info">
              <h3 class="discount__text">20% OFF</h3>
              <h3 class="discount__title">Dish For Discount</h3>
              <h3 class="discount__price">
                <span class="discount__oldPrice">$45</span>
                <span class="discount__newPrice">$35</span>
              </h3>
             
              <a class="btn primary-btn" href="/">Command Now</a>
            </div>
          </div>
        </div>
      </section>
    )}
}

export default Discount
