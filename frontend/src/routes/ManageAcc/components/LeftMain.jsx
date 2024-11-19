import React from 'react'

export const LeftMain = (props) => {
  return (
    <div>
        <div className='ma-left-top'>
            <h2>{props.user.name}</h2>
            <p>{props.user.email}</p>
        </div>
        <div className='ma-left-btn-section'>
            <button className={props.personal && 'p-color'} onClick={props.personalBtn}>Personal Information</button>
            <button className={props.address && 'p-color'}  onClick={props.AddressBtn}>Billing & Payment</button>
            <button className={props.order && 'p-color'}  onClick={props.orderBtn}>Order History</button>
        </div>
    </div>
  )
}
