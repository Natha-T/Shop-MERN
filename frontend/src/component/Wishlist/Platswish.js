import React from 'react'
import './Platswish.css'

import { useGetProductsQuery } from '../../redux/features/Product/proSlice'

function Platswish() {
  
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
      
        const food1= data[1]
        const food2= data[2]
        const food3= data[3]
         
        const foods = new Array(food1, food2, food3);

        console.log(foods);
        
        
 

    return (
        <section id="dishGrid" data-aos="fade-down">
        <div class="container">
          <h2 class="dishGrid__title">
            Top Dishes
          </h2>
          <div class="dishGrid__wrapper">
           
            {foods.map((item) => (
              <div class="dishGrid__item">
              <div class="dishGrid__item__img">
                <img src={item.image} alt="food img"/>
              </div>
              <div class="dishGrid__item__info">
                <h3 class="dishGrid__item__title">
                  {item.name}
                </h3>
                <h3 class="dishGrid__item__price">${item.price}</h3>
                <div class="">
                  <button class="dishGrid__item__btn">Delete from Wishlist</button>
                </div>
              </div>
            </div>
            ))}





          </div>
        </div>
      </section>
    )}
}

export default Platswish

/* <div class="dishGrid__item">
              <div class="dishGrid__item__img">
                <img  alt="food img"/>
              </div>
              <div class="dishGrid__item__info">
                <h3 class="dishGrid__item__title">
                  Hot Green Bowl
                </h3>
                <h3 class="dishGrid__item__price">$12</h3>
                <div class="">
                  <button class="dishGrid__item__btn">Delete from Wishlist</button>
                </div>
              </div>
            </div>*/