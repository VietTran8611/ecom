import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';


export const LowerNav = () => {

  const navigate = useNavigate();

  return (
    <ul className='upperNav lowerNav'>
        <div className='logo'>
          <p onClick={()=>{navigate('/')}} className='bold home-btn'>Company Name</p>
        </div>
        <div className='navUltility'>
          <div className='search-container'>
            <input type="text" placeholder='Search...' />
            <img src="src/img/search.png" alt="" />
          </div>
          <a className='cart-con' href="/cart">
            <ShoppingCart />
          </a>
        </div>
    </ul>
  )
}
