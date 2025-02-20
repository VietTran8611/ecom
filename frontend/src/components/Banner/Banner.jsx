import React from 'react'

export const Banner = (props) => {
  return (
    <div className='banner-container'>
        {props.admin.map(({avatar,banner},index)=>{
          return(
            <img src={banner} alt="" />
          )
        })}
        <div className='banner-content'>
            <div className='text'>
                <h1>Lorem, ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsum soluta doloremque nobis expedita fuga commodi exercitationem esse eaque laboriosam!</p>
            </div>
            <a className='a-btn' href="#">Learn more</a>
        </div>
    </div>
  )
}
