import React from 'react'
import Footer from '../component/Global/Footer'
import Navbar from '../component/Global/Navbar'
import Discount from '../component/Home/Discount'
import Plats from '../component/Menu/Plats'

import Titre from '../component/Menu/Titre'


function Menu() {


    return (


   <div>
    <Navbar/>
    <Titre/>



     
    <Plats/>
   
    <Discount/>
    <Footer/>
   </div>
    )
}

export default Menu
