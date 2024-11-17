import React from 'react'


export const PriceCard = (props) => {
  return (
    <div className='price-card'>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
        <div className='perk-container'>
            {props.perk.map((per,index)=>{
                return(
                    <div key={index} className='perk'>
                        <p className='checkmark'>✔</p>
                        <p>{per}</p>
                    </div> 
                )
            })}
            
            <a className='a-btn perk-btn' href="">{props.btn}</a>
        </div>
    </div>
  )
}
