import React, { useEffect, useState } from 'react'
import { useProductsStore } from '../../store/productStore';
import { CartCard } from './CartCard';
import { useAuthStore } from '../../store/authStore';
import { useOrderStore } from '../../store/orderStore';
import { Nav } from '../../components/Nav/Nav';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const [total,setTotal] = useState(0)
  const [cartItem,setCart] = useState([])
  const navigate = useNavigate();

  const { fetchCart, cart, isCheckProduct } = useProductsStore();
  const {  user, isCheckingAuth } = useAuthStore();
  const {createOrder} = useOrderStore()

  const cart1 = window.localStorage.getItem('cart')
  const arr = JSON.parse(cart1)
  useEffect(()=>{
    arr.map(e =>{fetchCart(e.id)})
  },[fetchCart])

  const updatePrice =(price)=>{
    setTotal(total=>total+price)
    
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    cartItem.map((item)=>{createOrder(item)} )
    const arr =[]
    window.localStorage.setItem('cart',JSON.stringify(arr))
    window.localStorage.setItem('total',JSON.stringify(0))
    setCart(arr)
  }

  const handleRoute = () =>{
    window.localStorage.setItem('address',JSON.stringify(true))
    window.localStorage.setItem('personal',JSON.stringify(false))
    window.localStorage.setItem('order',JSON.stringify(false))
    navigate('/manage-account')
  }

    if (isCheckingAuth) return <Spinner />;
  
  return (
      <div>
        <Nav />
        <div className='container margin-nav'>
          <h1>Your Cart</h1>
          <p>{arr.length} item to ship out</p>
          {
            (user && cart &&       
              <div className='cart-content'>
                <div className='cart-left'>        
                  {cart && cart.map((object, i) => { if(i<arr.length){
                    return <CartCard cartItem={cartItem} setCart={setCart} updatePrice={updatePrice} cart={object} key={i} index={i} quantity={arr.find((element) => element.id === object._id ).quantity} />
                  }
                  })}
                </div>
                <div className='cart-sum'>
                    <h3>Summary:</h3>
                    <div className='cart-sum-content-container'>
                      <div className='cart-sum-content'>
                        <p>Subtotal:</p>
                        <p>${JSON.parse(window.localStorage.getItem('total'))}</p>
                      </div>
                      <div className='cart-sum-content'>
                        <p>Shipping discount:</p>
                        <p>-$0.00</p>
                      </div>
                      <div className='cart-sum-content'>
                        <p>Shipping $ Handling:</p>
                        <p>$0.00</p>
                      </div>
                      <div className='cart-sum-content'>
                        <p>Tax:</p>
                        <p>$0.00</p>
                      </div>
                    </div>
                    <div className='cart-sum-content'>
                      <h3>Balance</h3>
                      <p>${JSON.parse(window.localStorage.getItem('total'))}</p>
                    </div>
                    {(user.shippingAddress.city && user.shippingAddress.country && user.shippingAddress.province && user.shippingAddress.street1 && user.shippingAddress.zip) ? (
                      <button onClick={handleSubmit}>Check Out</button>
                    ) : (
                      <button onClick={handleRoute}>Add Shipping Address</button>
                    )}
                    {/* <button onClick={()=>{console.log(cartItem)}}>cart</button>
                    <button onClick={()=>{console.log(cart)}}>button</button> */}

                </div>
              </div>
            )
          }
        </div>
      </div>
  )
}
