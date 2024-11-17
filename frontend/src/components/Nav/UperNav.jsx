import React, { useEffect } from 'react'
import { useAuthStore } from '../../store/authStore'
import { useNavigate } from 'react-router-dom';

export const UperNav = () => {
    const navigate = useNavigate();
    const {logout,isLoading,error,user,isAuthenticated,checkAuth} = useAuthStore()
    const handleLogout = async (e) => {
		e.preventDefault();
        await logout()
        
	};

    const handleManage = async (e) =>{
        e.preventDefault()
        await checkAuth()
        navigate('/manage-account')
    }

  return (
    <ul className='upperNav smallfs'>
        <ul className='top-right-nav'>
            <li className='beginNav'><a href="#">Start a business </a></li>
            <li><a href="#">Insider</a></li>
        </ul>
        <ul className='top-left-nav'>
            <li>
                <a href="#">Languages ▼</a>
                {/* <ul className='dropdown lang'> 
                    <ul className='lang'>
                        <li className='eng'><a href="#">English</a></li>
                        <li><a href="#">French</a></li>
                    </ul>
                </ul> */}
            </li>
            <li className='help'>
                <a href="#">Help ▼</a>
                {/* <ul className='dropdown'>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Return</a></li>
                </ul> */}
            </li>
            {user ? (
            <li className='login'>
                <a href="">Hi, {user.name} ▼</a>
                <div className='dropdown-login-menu'>
                        <div onClick={handleManage}>Manage Account</div>
                        <div  onClick={handleLogout}>Log Out</div>
                </div>
            </li>
            ) : (
                <li className='login'>
                <div  className='login-list'>
                    <img className='login-icon' src="src/img/user.png" alt="" />
                    <a href="/login">Login </a> 
                </div>
            </li>
            )}
        </ul>
    </ul>
  )
}
