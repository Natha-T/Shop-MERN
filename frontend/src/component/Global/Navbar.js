import React from 'react'
import './Navbar.css'
import { useSelector } from 'react-redux'

function Navbar() {
  const user = useSelector((state) => state.auth)
 


    return (
        <div class="nav">
    <div class="container">
      <div class="nav__wrapper">
        <a href="./index.html" class="logo">
          <img />
          logo
        </a>
        <nav>
           
          <div class="nav__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-menu">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
                   
             
         </div>

          
          <div class="nav__bgOverlay"></div>
          <ul class="nav__list">

      
            <div class="nav__close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div class="nav__list__wrapper">

              <li><a class="nav__link" href="./">Home</a></li>
              <li><a class="nav__link" href="./menu">Menu</a></li>
              <li><a class="nav__link" href="./wishlist">Wishlist</a></li>
              <li><a class="nav__link" href="./cart">Cart</a></li>

            
               <li><a class="nav__link" href="./login">Login</a></li>
                <li><a class="nav__link" href="./register">Register</a></li>
           
                <li><a class="nav__link"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA70lEQVR4nO3UQUrDQBSH8R8umqVdWrrWK+hJxEPYHsNuRPFAurR1ZfEAuinVlUUUXVYGJiCCdNJObCn54A8heeGbl8wbGjaUAn2M8BETrnvxWS10Mcb8j9zHmqwUC6Q/5Vk77ydIy5zmFN9VEA9zit8riENtNuYVs5aO37biH/fWtauLOKMpc9ySme4CeS0nV0krfsph3HAht/Fe9k4b/pUdHGGAGzzjK2aKa5zhMNauTAcXeKkwx2FR59hbRtjGFT6XOKfLhHcvsZsqPcDTCsLfecR+ivgho7TMOEU8rUE8SRGfYJZR+orjFHHDdvENyZP0ibBvoI8AAAAASUVORK5CYII="/>
            </a>    {user.email} </li>
            </div>
 
          </ul> 
        </nav>
      </div>
    </div>
  </div>
      
    )
}

export default Navbar