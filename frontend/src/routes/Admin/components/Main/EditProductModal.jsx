import React, { useState } from 'react'
import { useProductsStore } from '../../../../store/productStore';
import toast from 'react-hot-toast';
import { useAdminStore } from '../../../../store/adminStore';


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
export const EditProductModal = (props) => {
    const [newProduct, setNewProduct] = useState({
		name: props.name,
		price: props.price,
		image: props.image,
	});  

    const [imga,setImg] = useState({
      banner: "",
      avatar: ""
    })

    const { updateProduct,deleteProduct } = useProductsStore();

    const handleSubmit = async  (e) => {
        e.preventDefault();
        const { success, message } = await updateProduct(props.id,newProduct);
        if (!success) {
            toast.error("Error")
          } else {
              toast.success("success")
              setNewProduct({ 		
                  name: props.name,
                  price: props.price,
                  image: props.image,});
              props.toggleModal()
          }
		
      }

      const handleDelete = async  (e) => {

        e.preventDefault();
        const { success, message } = await deleteProduct(props.id);
        if (!success) {
            toast.error("Error")
		} else {
            toast.success("success")
            setNewProduct({ 		
                name: props.name,
                price: props.price,
                image: props.image,});
            props.toggleModal()
		}
		
      }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setNewProduct({ ...newProduct, image : base64 })
      }

    //   const tempHandleFileUpload = async (e) => {
    //     const file = e.target.files[0];
    //     const base64 = await convertToBase64(file);
    //     setImg({ ...imga, banner : base64 })
    //   }

    //   const tempHandleFileUpload2 = async (e) => {
    //     const file = e.target.files[0];
    //     const base64 = await convertToBase64(file);
    //     setImg({ ...imga, avatar : base64 })
    //     console.log(imga)
    //   }

      
    // const handleSubmitTemp = async  (e) => {
    //   e.preventDefault();
    //   console.log(imga)
    //   const { success, message } = await createAdminData(imga);
    //   if (!success) {
    //       toast.error("Error")
    //     } else {
    //         toast.success("success")
    //         props.toggleModal()
    //     }
  
    // }

  return (
    <div className='modal'>
        <div onClick={props.toggleModal} className="overlay"></div>
        <div className="modal-content  edit-modal">
            <h1>Create new product</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    value={newProduct.name}
                    placeholder={props.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input 
                    type="text"
                    name="price"
                    placeholder={props.price}
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />

                <input 
                    type="file"
                    lable="Image"
                    name="myFile"
                    id='file-upload'
                    accept='.jpeg, .png, .jpg'
                    onChange={(e) => handleFileUpload(e)}
                />
                <label htmlFor="file-upload" >
                    <img className='custom-file-upload' src={props.image} alt="" />
                </label>
                <button type='submit'>Submit</button>
            </form>
            <button onClick={handleDelete}>
                Delete Product
            </button>
            <button className="close-modal" onClick={props.toggleModal}>
              X
            </button>
        </div>
    </div>
  )
}
