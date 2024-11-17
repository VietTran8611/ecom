import React, { useState } from 'react'
import { useProductsStore } from '../../../../store/productStore';
import toast from 'react-hot-toast';
function convertToBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

export const Modal = (props) => {
    const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});  

    const { createProduct } = useProductsStore();

    const handleSubmit = async  (e) => {
        console.log(newProduct)
        e.preventDefault();
        const { success, message } = await createProduct(newProduct);
        if (!success) {
            toast.error("Error")
		} else {
            toast.success("success")
            setNewProduct({ name: "", price: "", image: "" });
            props.toggleModal()
		}
		
      }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setNewProduct({ ...newProduct, image : base64 })
      }

  return (
    <div className='modal'>
        <div onClick={props.toggleModal} className="overlay"></div>
        <div className="modal-content">
            <h1>Create new product</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    value={newProduct.name}
                    placeholder='Product Name'
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input 
                    type="text"
                    name="price"
                    placeholder='Price'
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />

                <input 
                    type="file"
                    lable="Image"
                    name="myFile"
                    id='input1'
                    accept='.jpeg, .png, .jpg'
                    onChange={(e) => handleFileUpload(e)}
                />

                <button type='submit'>Submit</button>
            </form>
            <button className="close-modal" onClick={props.toggleModal}>
              X
            </button>
        </div>
    </div>
  )
}
