import React from 'react'

export const RatingCard = (props) => {
  return (
    <div className='rating-item'>
        <div className='rating-head'>
            <span className="dot"></span>
            <div className='rating-head-right'>
                <p>{props.user}</p>
                <p>{props.product}</p>
            </div>
        </div>
        <h2 className='star'>★★★★★</h2>
        <p>{props.comment}</p>
    </div>
  )
}
