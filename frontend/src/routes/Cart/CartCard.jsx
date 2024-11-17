import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../../store/authStore';
import { useProductsStore } from '../../store/productStore';

export const CartCard = (props) => {
    const {  user } = useAuthStore();
    const {removeCartItem} = useProductsStore()
    const [newCart,setNewCart] = useState({
        name: props.cart.name,
        price: 0,
        image: props.cart.image,
        quantity: props.quantity,
        buyer: user._id,
        shippingAddress: user.shippingAddress,
        productId: props.cart._id
    })

    useEffect(()=>{
        let arr = props.cartItem
        if(!arr.find((element) => element.productId === props.cart._id )){
            arr.push(newCart)
        }else{
            for(let i=0;i<arr.length;i++){
                if(arr[i].productId === props.cart._id){
                    arr[i] = newCart
                }
            }
        }
        props.setCart(arr)
    },[newCart])


    const increaseQuan = () =>{

        setNewCart({...newCart,quantity:newCart.quantity+1,price: newCart.price+props.cart.price})
        const cart1 = window.localStorage.getItem('cart')
        let arr = JSON.parse(cart1)
        for(let i=0;i<arr.length;i++){
            if(arr[i].id === props.cart._id){
                arr[i] = {...arr[i],quantity :arr[i].quantity+1}
            }  
        }
        window.localStorage.setItem('cart',JSON.stringify(arr))
        window.localStorage.setItem('total',JSON.stringify(props.cart.price+ JSON.parse(window.localStorage.getItem('total'))))
        
        props.updatePrice(props.cart.price)
    }

    const reduceQuan = () =>{
        if(JSON.parse(window.localStorage.getItem('cart')).filter(item => item.id === props.cart._id)[0].quantity >0){
            setNewCart({...newCart,quantity:newCart.quantity-1,price: newCart.price-props.cart.price})
            const cart1 = window.localStorage.getItem('cart')
            let arr = JSON.parse(cart1)
            for(let i=0;i<arr.length;i++){
                if(arr[i].id === props.cart._id){
                    arr[i] = {...arr[i],quantity :arr[i].quantity-1}
                }  
            }
            window.localStorage.setItem('cart',JSON.stringify(arr))
            window.localStorage.setItem('total',JSON.stringify( JSON.parse(window.localStorage.getItem('total'))- props.cart.price))
    
            props.updatePrice(-props.cart.price)
        }
    }

    const deleteCartItem =()=>{
        window.localStorage.setItem('total',JSON.stringify(JSON.parse(window.localStorage.getItem('total')) - props.cart.price*newCart.quantity))
        props.updatePrice(-props.cart.price*newCart.quantity)
        const cart1 = window.localStorage.getItem('cart')
        let arr = JSON.parse(cart1)
        arr = arr.filter(item => item.id !== props.cart._id)
        window.localStorage.setItem('cart',JSON.stringify(arr))
        arr = props.cartItem
        arr = arr.filter(item => item.productId != props.cart._id)
        props.setCart(arr)
        removeCartItem(props.cart._id)
        location.reload();

    }
  return (
    <div className='cart-card'>
        <img src={props.cart.image} alt="" />
        <div className='cart-card-content'>
            <div className='cart-card-content-top'>
                <p>{props.cart.name} (${props.cart.price}/ unit)</p>
                <button onClick={deleteCartItem} >x</button>
            </div>
            <div className='cart-card-content-bottom'>
                <div className='quantity-btn'>
                    <button onClick={reduceQuan}>-</button>
                    <p>{JSON.parse(window.localStorage.getItem('cart')).filter(item => item.id === props.cart._id)[0].quantity}</p>
                    <button onClick={increaseQuan}>+</button>
                </div>
                {/* <p>{props.cart._id}</p> */}
                <p>${props.cart.price * JSON.parse(window.localStorage.getItem('cart')).filter(item => item.id === props.cart._id)[0].quantity}</p>
            </div>
        </div>
    </div>
  )
}
