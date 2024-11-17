import React from 'react'

export const Footer = () => {
  return (
    <div className='container footer-container'>
        <div className='footer-head'>
            <h3>Company name </h3>
        </div>
        <div className='footer-main'>
            <div className='company'>
                <p className='bold'>COMPANY</p>
                <a href="#">Our Story</a>
                <a href="#">Insider</a>
                <a href="#">Events</a>
                <a href="#">Careers</a>
            </div>
            <div className='help'>
                <p className='bold'>HELP CENTER</p>
                <a href="#">Shipping & Delivery</a>
                <a href="#">Orders & Return</a>
                <a href="">Guest Order Search</a>
            </div>
            <div className='connect'>
                <p className='bold'>LET's CONNECT</p>
                <a href="https://github.com/VietTran8611">Github</a>
                <a href="https://discord.com/users/413880387878649856">Discord</a>
            </div>
        </div>
    </div>
  )
}
