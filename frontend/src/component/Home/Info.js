import React from 'react'
import './Info.css'

function Info() {
    return (
        <section id="storeInfo" data-aos="fade-up">
        <div class="container">
          <div class="storeInfo__wrapper">
            <div class="storeInfo__item">
              <div class="storeInfo__icon">
                <img  alt="clock icon"/>
              </div>
              <h3 class="storeInfo__title">
                10 AM - 7 PM
              </h3>
              <p class="storeInfo__text">
                Opening Hour
              </p>
            </div>
            <div class="storeInfo__item">
              <div class="storeInfo__icon">
                <img  alt="clock icon"/>
              </div>
              <h3 class="storeInfo__title">
                GEC, Chittagong
              </h3>
              <p class="storeInfo__text">
                Address
              </p>
            </div>
            <div class="storeInfo__item">
              <div class="storeInfo__icon">
                <img alt="clock icon"/>
              </div>
              <h3 class="storeInfo__title">
                +880123443
              </h3>
              <p class="storeInfo__text">
                Call Now
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Info
