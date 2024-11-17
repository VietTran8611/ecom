import React, { useEffect, useState } from 'react'
import axios from 'axios'
const url = "http://localhost:5000/api/products"

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

export const Test = () => {
    const [postImage, setPostImage] = useState( {name: "Artistry Skin Nutrition™ Balancing Matte Day Lotion SPF 30", price:"51", image : ""})
    const createPost = async (newImage) => {
      try{
        await axios.post(url, newImage)
      }catch(error){
        console.log(error)
      }
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      createPost(postImage)
      console.log("Uploaded")
    }
  
    const handleFileUpload = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      setPostImage({ ...postImage, image : base64 })
    }

     return (
      <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="file-upload" className='custom-file-upload'>
                <img src={postImage.image} alt="" />
            </label>
            <input 
            type="file"
            lable="Image"
            name="myFile"
            id='file-upload'
            accept='.jpeg, .png, .jpg'
            onChange={(e) => handleFileUpload(e)}
            />
            <span>Designer</span>

            <button type='submit'>Submit</button>
            </form>
            <button ></button>
      </div>
    )
}
