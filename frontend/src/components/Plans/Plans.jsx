import React from 'react'
import data from './price.json'
import { PriceCard } from './PriceCard'

export const Plans = () => {
  return (
    <div className='container price'>
       <h1>Plans & Pricing</h1> 
       <div className='price-card-container'>
            {data.map(({title,btn,price,perk},index)=>{
                return(
                    <PriceCard key={index} title ={title} btn={btn} price={price} perk={perk} index ={index}/>
                )
            })}
       </div>
    </div>
  )
}
