import React from 'react'
import './Hero.css'

import { useGetProductsQuery } from '../../redux/features/Product/proSlice'


function Hero() {
  
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

 
  



    return (
        <section id="hero">
        <div class="container">
          <div class="hero__wrapper">
            <div class="hero__left" data-aos="fade-left">
              <div class="hero__left__wrapper">
    
                <h1 class="hero__heading">The flavor of tradition</h1>
                <p className='hero__info'>
                  We are a multi-cuisine restaurant offering a wide variety of food experience in both casual and fine
                  dining
                  environment.
                </p>
                <div class="button__wrapper">
                  <a href="./menu" class="btn primary-btn">Explore Menu</a>
                  <a href="/" class="btn">Book Table</a>
                </div>
              </div>
            </div>
            <div class="hero__right" data-aos="fade-right">
              <div class="hero__imgWrapper">
                <img src={food1.image} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
