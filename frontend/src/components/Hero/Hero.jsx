import React, { useEffect, useRef, useState } from 'react'
import { useAdminStore } from '../../store/adminStore';

export const Hero = (props) => {
    const inputRef = useRef(null)
    const [image,setImage] = useState("")
    const handleImageCLick = () =>{
      inputRef.current.click()
    }
  
    const handleImageChange=(event) =>{
      const file  = event.target.files[0]
      setImage(file)
    }

  return (
    <div className='hero'>
        <div className="image-upload-container">
            <div className="box-decoration">
                {props.admin.map(({avatar,banner},index)=>{
                  return(
                    <div key={index} onClick={handleImageCLick} style={{ cursor: "pointer" }}>
                        {image ? (
                        <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
                        ) : ( 
                        <img src= {avatar} alt="upload image" className="img-display-before" />
                        )}

                        <input
                        id="image-upload-input"
                        type="file"
                        onChange={handleImageChange}
                        ref={inputRef}
                        style={{ display: "none" }}
                        />
                    </div>
                  )
                })}
            </div>
        <h1 className='noPad'>My Name</h1>
        <p className='noPad'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, animi!</p>
        </div>
    </div>
  )
}
