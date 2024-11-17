import React from 'react'
import { UperNav } from './UperNav'
import { LowerNav } from './LowerNav'

export const Nav = () => {
  return (
    <header>
        <div className='test'> 
            <UperNav />
        </div>
        <div className='test'>
            <LowerNav />
        </div>
    </header>
  )
}
