import React from 'react'
import Footer from '../component/Global/Footer'
import Navbar from '../component/Global/Navbar'
import Discount from '../component/Home/Discount'
import Platswish from '../component/Wishlist/Platswish'
import Titrewish from '../component/Wishlist/Titrewish'

function Wishlist() {
    return (
        <div>
           <Navbar/>
           <Titrewish/>
           <Platswish/>
           <Discount/>
           
           <Footer/>
        </div>
    )
}

export default Wishlist
