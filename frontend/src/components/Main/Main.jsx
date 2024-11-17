import React, { useEffect, useState } from 'react'
import data from './product.json'
import { Card } from './Card'
import { useProductsStore } from '../../store/productStore';

export const Main = () => {
    const { fetchProducts, products } = useProductsStore();
    const [checkedState, setCheckedState] = useState(
        new Array(products.length).fill(false)
    );

    const [realCheck,setRealCheck] = useState([])

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
    
    useEffect(() => {
		setCheckedState(new Array(products.length).fill(false))
	}, [products]);
    
    useEffect(()=>{
        const updatedCheckedState = checkedState.map((item, index) =>
            index < 6 ? true : false
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
            index < 6 ? true : false
          );
          setRealCheck(updatedCheckedState);
    }

  return (
    <div className='main'>
        <h1 className='bold'>My Shop</h1>
        <div className='card-container'>
            {products.map(({image,name,price,_id},index)=>{
                return(
                    <Card key={_id} id={_id} cl= {realCheck[index] ? 'content-card show' : 'content-card'} img={image} pName = {name} price ={price}/>
                )
            })}
        </div>
        
        {check ? <button className='a-btn' onClick={less}>Show Less Products</button> : <button className='a-btn' onClick={more}>Show More Products</button>}
    </div>
  )
}
