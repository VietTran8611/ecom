import React, { useState } from 'react'
import { Truck, Receipt,Pencil, Pen   } from 'lucide-react';
import { useAuthStore } from '../../../store/authStore';
import toast from 'react-hot-toast';

export const ManageAddress = (props) => {

    const [shipping,setShipping] = useState({
        city: false,
        country: false,
        province:false,
        street1: false,
        street2:false,
        zip:false
    })

    const editshipping1 = () =>{
        setShipping({...shipping,city: !shipping.city})
    }
    const editshipping2 = () =>{
        setShipping({...shipping,country: !shipping.country})
    }
    const editshipping3 = () =>{
        setShipping({...shipping,province: !shipping.province})
    }
    const editshipping4 = () =>{
        setShipping({...shipping,street1: !shipping.street1})
    }
    const editshipping5 = () =>{
        setShipping({...shipping,street2: !shipping.street2})
    }
    const editshipping6 = () =>{
        setShipping({...shipping,zip: !shipping.zip})
    }

    const [billing,setBilling] = useState({
        city: false,
        country: false,
        province:false,
        street1: false,
        street2:false,
        zip:false
    })

    const editshipping7 = () =>{
        setBilling({...billing,city: !billing.city})
    }
    const editshipping8 = () =>{
        setBilling({...billing,country: !billing.country})
    }
    const editshipping9 = () =>{
        setBilling({...billing,province: !billing.province})
    }
    const editshipping10 = () =>{
        setShipping({...billing,street1: !billing.street1})
    }
    const editshipping11 = () =>{
        setShipping({...billing,street2: !billing.street2})
    }
    const editshipping12 = () =>{
        setShipping({...billing,zip: !billing.zip})
    }
    const {updateUser} = useAuthStore()
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
           props.AddressBtn()
           console.log("test")
		}
    }

  return (
    <div className='ma-righ-add-con'>
        <div className='ma-add-con'>
                <div>
                    <div className='addr-con'>
                        <h3>Shipping Address</h3>
                        <Truck />
                    </div>
                    <div>
                        <div className='addr-con'>
                            <div className='addr-info'>
                                <p>City:</p>
                                {shipping.city ? (
                                    <input 
                                        type="text"
                                        name="name"
                                        placeholder={props.user.shippingAddress.city}
                                        onChange={(e) => props.setNewUser({ ...props.newUser, shippingAddress:{...props.newUser.shippingAddress,city: e.target.value}})}
                                    />
                                ) : (
                                    <p>{props.user.shippingAddress.city}</p>
                                )}
                            </div>
                            <Pencil className='pencil-hover' onClick={editshipping1}/>
                        </div>
                        <div className='addr-con'>
                            <div className='addr-info'>
                                <p>Country:</p>
                                    {shipping.country ? (
                                        <input 
                                            type="text"
                                            name="name"
                                            placeholder={props.user.shippingAddress.country}
                                            onChange={(e) => props.setNewUser({ ...props.newUser, shippingAddress:{...props.newUser.shippingAddress,country: e.target.value}})}
                                        />
                                    ) : (
                                        <p>{props.user.shippingAddress.country}</p>
                                    )}
                            </div>
                            <Pencil className='pencil-hover' onClick={editshipping2}/>
                        </div>
                        <div className='addr-con'>
                            <div className='addr-info'>
                                <p>Province:</p>
                                    {shipping.province ? (
                                        <input 
                                            type="text"
                                            name="name"
                                            placeholder={props.user.shippingAddress.province}
                                            onChange={(e) => props.setNewUser({ ...props.newUser, shippingAddress:{...props.newUser.shippingAddress,province: e.target.value}})}
                                        />
                                    ) : (
                                        <p>{props.user.shippingAddress.province}</p>
                                    )}
                            </div>
                            <Pencil className='pencil-hover' onClick={editshipping3}/>
                        </div>
                        <div className='addr-con'>
                            <div className='addr-info'>
                                <p>Street 1:</p>
                                {shipping.street1 ? (
                                    <input 
                                        type="text"
                                        name="name"
                                        placeholder={props.user.shippingAddress.street1}
                                        onChange={(e) => props.setNewUser({ ...props.newUser, shippingAddress:{...props.newUser.shippingAddress,street1: e.target.value}})}
                                    />
                                ) : (
                                    <p>{props.user.shippingAddress.street1}</p>
                                )}
                            </div>
                            <Pencil className='pencil-hover' onClick={editshipping4}/>
                        </div>
                        <div className='addr-con'>
                            <div className='addr-info'>
                                <p>Street 2:</p>
                                {shipping.street2 ? (
                                    <input 
                                        type="text"
                                        name="name"
                                        placeholder={props.user.shippingAddress.street2}
                                        onChange={(e) => props.setNewUser({ ...props.newUser, shippingAddress:{...props.newUser.shippingAddress,street2: e.target.value}})}
                                    />
                                ) : (
                                    <p>{props.user.shippingAddress.street2}</p>
                                )}
                            </div>
                            <Pencil className='pencil-hover' onClick={editshipping5}/>
                        </div>
                        <div className='addr-con'>
                            <div className='addr-info'>
                                <p>Zip code:</p>
                                {shipping.zip ? (
                                    <input 
                                        type="text"
                                        name="name"
                                        placeholder={props.user.shippingAddress.zip}
                                        onChange={(e) => props.setNewUser({ ...props.newUser, shippingAddress:{...props.newUser.shippingAddress,zip: e.target.value}})}
                                    />
                                ) : (
                                    <p>{props.user.shippingAddress.zip}</p>
                                )}
                            </div>
                            <Pencil className='pencil-hover' onClick={editshipping6}/>
                        </div>
                    </div>
                </div>
                <button onClick={handleSubmit}>Submit</button>

        </div>
        <div className='ma-add-con'>
            <div className='addr-con'>
                <h3>BIlling Address</h3>
                <Receipt />
            </div>
                    <div>
                        <div className='addr-con'>
                            <div className='addr-info'>
                                <p>City:</p>
                                {billing.city ? (
                                    <input 
                                        type="text"
                                        name="name"
                                        placeholder={props.user.billingAddress.city}
                                        onChange={(e) => props.setNewUser({ ...props.newUser, billingAddress:{...props.newUser.billingAddress,city: e.target.value}})}
                                    />
                                ) : (
                                    <p>{props.user.billingAddress.city}</p>
                                )}
                            </div>
                            <Pencil className='pencil-hover' onClick={editshipping7}/>
                        </div>
                        <div className='addr-con'>
                            <div className='addr-info'>
                                <p>Country:</p>
                                    {billing.country ? (
                                        <input 
                                            type="text"
                                            name="name"
                                            placeholder={props.user.billingAddress.country}
                                            onChange={(e) => props.setNewUser({ ...props.newUser, billingAddress:{...props.newUser.billingAddress,country: e.target.value}})}
                                        />
                                    ) : (
                                        <p>{props.user.billingAddress.country}</p>
                                    )}
                            </div>
                            <Pencil className='pencil-hover' onClick={editshipping8}/>
                        </div>
                        <div className='addr-con'>
                            <div className='addr-info'>
                                <p>Province:</p>
                                    {billing.province ? (
                                        <input 
                                            type="text"
                                            name="name"
                                            placeholder={props.user.billingAddress.province}
                                            onChange={(e) => props.setNewUser({ ...props.newUser, billingAddress:{...props.newUser.billingAddress,province: e.target.value}})}
                                        />
                                    ) : (
                                        <p>{props.user.billingAddress.province}</p>
                                    )}
                            </div>
                            <Pencil className='pencil-hover' onClick={editshipping9}/>
                        </div>
                        <div className='addr-con'>
                            <div className='addr-info'>
                                <p>Street 1:</p>
                                {billing.street1 ? (
                                    <input 
                                        type="text"
                                        name="name"
                                        placeholder={props.user.billingAddress.street1}
                                        onChange={(e) => props.setNewUser({ ...props.newUser, billingAddress:{...props.newUser.billingAddress,street1: e.target.value}})}
                                    />
                                ) : (
                                    <p>{props.user.billingAddress.street1}</p>
                                )}
                            </div>
                            <Pencil className='pencil-hover' onClick={editshipping10}/>
                        </div>
                        <div className='addr-con'>
                            <div className='addr-info'>
                                <p>Street 2:</p>
                                {billing.street2 ? (
                                    <input 
                                        type="text"
                                        name="name"
                                        placeholder={props.user.billingAddress.street2}
                                        onChange={(e) => props.setNewUser({ ...props.newUser, billingAddress:{...props.newUser.billingAddress,street2: e.target.value}})}
                                    />
                                ) : (
                                    <p>{props.user.billingAddress.street2}</p>
                                )}
                            </div>
                            <Pencil className='pencil-hover' onClick={editshipping11}/>
                        </div>
                        <div className='addr-con'>
                            <div className='addr-info'>
                                <p>Zip code:</p>
                                {billing.zip ? (
                                    <input 
                                        type="text"
                                        name="name"
                                        placeholder={props.user.billingAddress.zip}
                                        onChange={(e) => props.setNewUser({ ...props.newUser, billingAddress:{...props.newUser.billingAddress,zip: e.target.value}})}
                                    />
                                ) : (
                                    <p>{props.user.billingAddress.zip}</p>
                                )}
                            </div>
                            <Pencil className='pencil-hover' onClick={editshipping12}/>
                        </div>
                    </div>
                <button onClick={handleSubmit}>Submit</button>    
        </div>
    </div>
  )
}
