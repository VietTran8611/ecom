import React, { useEffect } from 'react'
import { useAuthStore } from '../../../store/authStore'
import { useOrderStore } from '../../../store/orderStore'
import { OrderCard } from './OrderCard'

export const ManageOrder = () => {
  const {user} = useAuthStore()
  const {orders,fetchOrder} = useOrderStore()
  useEffect(()=>{
    fetchOrder(user._id)
  },[fetchOrder])

  return (

    <div>
        {orders && orders.map((object, i) => { 
          return <OrderCard  cart={object} key={i} index={i} />
        
        })}
    </div>
  )
}
