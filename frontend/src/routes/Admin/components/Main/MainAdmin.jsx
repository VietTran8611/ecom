import React, { useEffect, useState } from 'react'
import { useProductsStore } from '../../../../store/productStore';
import { MainAdminCard } from './MainAdminCard';
import  { PlusCircle } from 'lucide-react';
import { Modal } from './Modal';

export const MainAdmin = () => {
  const { fetchProducts, products } = useProductsStore();
  const [checkedState, setCheckedState] = useState(
      new Array(products.length).fill(false)
  );

  const [realCheck,setRealCheck] = useState([])

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

useEffect(() => {
  fetchProducts();
}, [fetchProducts]);
  
  useEffect(() => {
  setCheckedState(new Array(products.length).fill(false))

}, [products]);
  
  useEffect(()=>{
      const updatedCheckedState = checkedState.map((item, index) =>
          index < 5 ? true : false
        );
        setRealCheck(updatedCheckedState);
  },[checkedState])

  const [check,setCheck] = useState(false)

  const more =()=>{
      setCheck(true)
      setRealCheck(new Array(products.length).fill(true))
  }

  const less =()=>{
      setCheck(false)
      const updatedCheckedState = checkedState.map((item, index) =>
          index < 5 ? true : false
        );
        setRealCheck(updatedCheckedState);
  }

return (
  <div className='main'>
      <h1 className='bold'>My Shop</h1>
      <div className='card-container'>
        <div onClick={toggleModal} className='card admin-card '>
          <div className='admin-card-content'>
            <PlusCircle className='lucid-plus' />
            <h1>Add product</h1>
          </div>
        </div>
          {products.map(({image,name,price,_id},index)=>{
              return(
                  <MainAdminCard key={_id} cl= {realCheck[index] ? 'content-card show' : 'content-card'} img={image} pName = {name} price ={price} id={_id}/>
              )
          })}
      </div>
      {check ? <button className='a-btn' onClick={less}>Show Less Products</button> : <button className='a-btn' onClick={more}>Show More Products</button>}
      {modal && (
        <Modal modal={modal} toggleModal={toggleModal} />
      )}
  </div>
)
}
