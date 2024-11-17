import React from 'react'

export const OrderCard = (props) => {
  return (
    <div className='cart-card'>
    <img src={props.cart.image} alt="" />
    <div className='cart-card-content'>
        <div className='cart-card-content-top'>
            <p>{props.cart.name}</p>
        </div>
        <div className='cart-card-content-bottom'>
            <div className='quantity-btn'>
                <p>Quantity: {props.cart.quantity}</p>
            </div>
            <p>${props.cart.price}</p>
        </div>
    </div>
</div>
  )
}
