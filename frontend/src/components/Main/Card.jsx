import React from 'react'
import toast from 'react-hot-toast';
import { ShoppingCart } from 'lucide-react';

export const Card = (props) => {
  const handleCLick =()=>{
    const cart = window.localStorage.getItem('cart')
    const total = window.localStorage.getItem('total')
    if(cart!= null){
      let arr = JSON.parse(cart)
      if(JSON.parse(window.localStorage.getItem('cart')).filter(item => item.id === props.id)[0]!=null){
        toast.error("Already in cart")

      }else{
        arr.push({id:props.id,quantity: 0})
        window.localStorage.setItem('cart',JSON.stringify(arr))
        toast.success("Added to cart")
      }
    }else{
      let arr =[]
      arr.push({id:props.id,quantity: 0})
      window.localStorage.setItem('cart',JSON.stringify(arr))
      toast.success("Added to cart")
    }

    if(!total){
      window.localStorage.setItem('total',JSON.stringify(0))
    }
  }

  return (
    <div className={`card ${props.cl}`}>
        <div className='card-content'>
            <img src={props.img} alt="" />
            <p>{props.pName}</p>
            <p className='bold'>${props.price}</p>
        </div>
        <div className='add-cart'>
            <button onClick={handleCLick}>
                {/* <img className='shoppingcart' src="src/img/shopping-cart.png" alt="" /> */}
                <ShoppingCart />
                <span className='bold'>Add to cart</span>
            </button>
        </div>
    </div>
  )
}
