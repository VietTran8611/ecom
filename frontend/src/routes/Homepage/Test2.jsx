import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useProductsStore } from '../../store/productStore';

export const Test2 = () => {
    const [postImage, setPostImage] = useState('')
	const { fetchProducts, products } = useProductsStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
    


  return (
    <div>
         {products.map((product) => (
				<img src={product.image} alt="" />
		))}
    </div>
  )
}
