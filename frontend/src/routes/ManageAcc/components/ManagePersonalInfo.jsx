import React, { useState } from 'react'
import { UserPen, Mail } from 'lucide-react';
import { useAuthStore } from '../../../store/authStore';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const ManagePersonalInfo = (props) => {

    const navigate = useNavigate();

    const {updateUser} = useAuthStore()
    const [toggleNameInput,setToggleNameInput] = useState(false)
    const [toggleEmailInput,setToggleEmailInput] = useState(false)
    const handleSwitch = () =>[
        setToggleNameInput(!toggleNameInput)
    ]
    const handleSwitch2 = () =>[
        setToggleEmailInput(!toggleEmailInput)
    ]

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const { success, message } = await updateUser(props.user._id,props.newUser);
        if (!success) {
            toast.error("Error")
		} else {
            toast.success("success")
            props.setNewUser({ 		
                name: props.user.name,
                id: props.user._id,
                email: props.user.email,
                shippingAddress:props.user.shippingAddress,
                billingAddress: props.user.billingAddress
            });
            
           location.reload()
		}
    }

  return (
    <div className='ma-righ-add-con'>
        <div className='ma-add-con'>
            <div className='personal-edit'>
                <div>
                    <h3>Name</h3>
                    {toggleNameInput ? (
                    <input 
                        type="text"
                        name="name"
                        placeholder={props.user.name}
                        onChange={(e) => props.setNewUser({ ...props.newUser, name: e.target.value })}
                    />
                    ) : (
                    <p>{props.user.name}</p>
                    )}
                </div>
                <div onClick={handleSwitch} className='ma-card-btn'>
                    <p>Edit</p>
                    <UserPen className='ma-card-icon' />
                </div>
            </div>
            <button onClick={handleSubmit}>submit</button>
        </div>
        <div className='ma-add-con '>
            <div className='personal-edit'>
                <div>
                    <h3>Contact Info</h3>
                    {toggleEmailInput ? (
                    <input 
                        type="email"
                        name="name"
                        placeholder={props.user.email}
                        onChange={(e) => props.setNewUser({ ...props.newUser, email: e.target.value })}
                    />
                    ) : (
                    <p>{props.user.email}</p>
                    )}
                </div>
                <div onClick={handleSwitch2} className='ma-card-btn'>
                    <p>Edit</p>
                    <UserPen className='ma-card-icon' />
                </div>
            </div>
            <button onClick={handleSubmit}>submit</button>
        </div>
    </div>
  )
}
