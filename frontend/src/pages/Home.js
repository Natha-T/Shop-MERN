import React from 'react'
import Footer from '../component/Global/Footer'
import Navbar from '../component/Global/Navbar'
import BestSeller from '../component/Home/BestSeller'
import Discount from '../component/Home/Discount'
import Hero from '../component/Home/Hero'
import Info from '../component/Home/Info'
import Specialiter from '../component/Home/Specialiter'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'


function Home() {
 // const product = useSelector(state => state.product.products);
 

    return (
  <div className=''>
    <Navbar/>
    <Hero/>
    <Discount/>
    <BestSeller/>

    <Info/>
    <Footer/>


 </div>
    )
}

export default Home
