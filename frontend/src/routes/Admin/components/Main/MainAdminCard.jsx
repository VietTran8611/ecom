import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Pencil } from 'lucide-react';
import { Modal } from './Modal';
import { EditProductModal } from './EditProductModal';

export const MainAdminCard = (props) => {

    const [modal, setModal] = useState(false);

    const handleCLick =()=>{
        setModal(!modal);
        
      }

    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

    return (
        <div className={`card ${props.cl}`}>
            <div className='card-content'>
                <img src={props.img} alt="" />
                <p className='card-title'>{props.pName}</p>
                <p className='bold'>${props.price}</p>
            </div>
            <div className='add-cart'>
                <button onClick={handleCLick}>
                    <Pencil />
                    <span className='bold'>Edit product</span>
                </button>
            </div>
            {modal && (
                <EditProductModal image={props.img} name={props.pName} price={props.price} modal={modal} toggleModal={handleCLick} id={props.id}/>
            )}
        </div>
      )
}
