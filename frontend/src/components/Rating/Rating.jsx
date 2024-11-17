import React from 'react'
import data from './rating.json'
import { RatingCard } from './RatingCard'

export const Rating = () => {
    const getBox=()=>{
        return document.querySelector('.rating-container')
      }
    
      const prev = ()=>{
        const box = getBox()
        const width = box.clientWidth
        box.scrollLeft =  box.scrollLeft - width
      }
    
      const next = ()=>{
        const box = getBox()
        const width = box.clientWidth
        box.scrollLeft = width + box.scrollLeft
      }

  return (
    <div className='container rating-section'>
        <button onClick={prev} className='prev'>➤</button>
        <div className='rating-container'>
            {data.map(({user,comment,product},index)=>{
                return(
                    <RatingCard key={user} user={user} comment ={comment} product={product}/>
                )
            })}
        </div>
        <button onClick={next} className='next'>➤</button>
    </div>
  )
}
