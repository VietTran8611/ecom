import React, { useEffect, useState } from 'react'
import { LeftMain } from './LeftMain'

import { useAuthStore } from '../../../store/authStore';
import { ManagePersonalInfo } from './ManagePersonalInfo';
import { ManageOrder } from './ManageOrder';
import { ManageAddress } from './ManageAddress';

export const MAMain = () => {
const [personal,setPersonal] = useState(false)
const [order,setOrder] = useState(false)
const [address,setAddress] = useState(false)

const personalBtn = () =>{
    setPersonal(true)
    setOrder(false)
    setAddress(false)
    window.localStorage.setItem('personal',JSON.stringify(true))
    window.localStorage.setItem('order',JSON.stringify(false))
    window.localStorage.setItem('address',JSON.stringify(false))
}
const orderBtn = () =>{
    setPersonal(false)
    setOrder(true)
    setAddress(false)
    window.localStorage.setItem('personal',JSON.stringify(false))
    window.localStorage.setItem('order',JSON.stringify(true))
    window.localStorage.setItem('address',JSON.stringify(false))
}
const AddressBtn = () =>{
    setPersonal(false)
    setOrder(false)
    setAddress(true)
    window.localStorage.setItem('personal',JSON.stringify(false))
    window.localStorage.setItem('order',JSON.stringify(false))
    window.localStorage.setItem('address',JSON.stringify(true))
}

useEffect(()=>{
    const perso = window.localStorage.getItem('personal')
    if(perso!=null) {setPersonal(JSON.parse(perso))}

    const ord = window.localStorage.getItem('order')
    if(ord!=null) {setOrder(JSON.parse(ord))}

    const add = window.localStorage.getItem('address')
    if(add!=null) {setAddress(JSON.parse(add))}
},[])

// const log = () =>{
//     console.log(personal)
//     console.log(order)
//     console.log(address)
// }

const { user } = useAuthStore();
const [newUser, setNewUser] = useState({
    name: user.name,
    id: user._id,
    email: user.email,
    shippingAddress:user.shippingAddress,
    billingAddress: user.billingAddress
})
  return (
    <div className='manage-acc-main'>
        <LeftMain personal={personal} order={order} address={address} personalBtn={personalBtn} orderBtn={orderBtn} AddressBtn={AddressBtn} user={user}/>
            {personal && <ManagePersonalInfo newUser={newUser}  setNewUser={setNewUser} user={user} />}
            {order && <ManageOrder user={user}/>}
            {address && <ManageAddress AddressBtn={AddressBtn} newUser={newUser}  setNewUser={setNewUser}  user={user}/>}
    </div>
  )
}


// _id
// 67350235a9b4378b03dccf15
// email
// "vtran86@uwo.ca"
// password
// "$2a$10$CooNdorLicZ5jCwcD1We8etZpZy40Mi9spvfD3puLZI9HRnid5f6G"
// name
// "test1"
// isverified
// false
// isAdmin
// false

// shippingAddress
// Object

// billingAddress
// Object
