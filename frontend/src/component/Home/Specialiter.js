import React from 'react'
import './Specialiter.css'


function Specialiter() {
    return (
        <section id="ourSpecials" data-aos="fade-up">
        <div class="container">
          <div class="ourSpecials__wrapper">
            <div class="ourSpecials__left">
              <div class="ourSpecials__item">
                <div class="ourSpecials__item__img">


                  <img  alt="food img"/>


                </div>
                <h2 class="ourSpecials__item__title">
                  Sweet Potato Fries Bowl
                </h2>
                <h3 class="ourSpecials__item__price">
                  $18
                </h3>
             
                <p class="ourSpecials__item__text">
                  These Sweet Potato Fries bowl are a glorious, messy plate of goodness. Crispy sweet potato fries loaded
                  with lots of fresh summer vegetables and a lime ranch. By adding a seasoning blend with chipotle powder,
                  garlic, and onion, these spicy sweet potato fries are full of flavor.
                </p>
              </div>


              <div class="ourSpecials__item">
                <div class="ourSpecials__item__img">


                  <img   alt="food img"/>


                </div>
                <h2 class="ourSpecials__item__title">
                  Vegan Salad bowl
                </h2>
                <h3 class="ourSpecials__item__price">
                  $18
                </h3>
               
                <p class="ourSpecials__item__text">
                  Vegan salad bowl are immensely satisfying with any combination of whole grains, pulses, noodles, raw or
                  cooked fruits, and veggies all topped off with a delicious sauce or dressing – each bite is an explosion
                  of flavors and textures.
                </p>
              </div>
            </div>
            <div class="ourSpecials__right">
              <h2 class="ourSpecials__title">
                Our Specials
              </h2>
              <p class="ourSpecials__text">
                All of our food is prepared daily at our restaurants to ensure the highest quality, freshest meals are
                delivered to our customers
              </p>
              <a href="./" class="btn primary-btn">Book Table</a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Specialiter
