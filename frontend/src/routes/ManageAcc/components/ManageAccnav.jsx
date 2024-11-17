import React from 'react'

export const ManageAccnav = (props) => {


  return (
    <div className='ma-nav'>
      <h3>{`${props.name} Account`}</h3>
      <div>
        <button>Sign Out</button>
      </div>
    </div>
  )
}
