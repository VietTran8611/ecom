import React from 'react'

export const LeftMain = (props) => {
  return (
    <div>
        <div>
            <h3>{props.user.name}</h3>
            <p>{props.user.email}</p>
        </div>
        <div className='ma-left-btn-section'>
            <button onClick={props.personalBtn}>Personal Information</button>
            <button onClick={props.AddressBtn}>Billing & Payment</button>
            <button onClick={props.orderBtn}>Order History</button>
        </div>
    </div>
  )
}
