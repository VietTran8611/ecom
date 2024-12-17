import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Nav } from '../../components/Nav/Nav';
import { ManageAccnav } from './components/ManageAccnav';
import { MAMain } from './components/MAMain';

export const ManageAcc = () => {
  const { isAuthenticated, user, checkAuth } = useAuthStore();
  const navigate = useNavigate();
  const [userData,setUser] = useState()


  return (
    <div>
      <Nav />
      <div className='ma-container margin-nav'>
        {user && (
          <div >
            <ManageAccnav   name={user.name}/>
            <MAMain />
          </div>
        )}

      </div>
    </div>
    
  )
}
