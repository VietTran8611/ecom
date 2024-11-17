import React, { useRef, useState } from 'react'

export const Hero = () => {
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
                <div onClick={handleImageCLick} style={{ cursor: "pointer" }}>
                    {image ? (
                    <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
                    ) : (
                    <img  src="src/img/4211763.png" alt="upload image" className="img-display-before" />
                    )}

                    <input
                    id="image-upload-input"
                    type="file"
                    onChange={handleImageChange}
                    ref={inputRef}
                    style={{ display: "none" }}
                    />
                </div>
            </div>
        <h1 className='noPad'>My Name</h1>
        <p className='noPad'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, animi!</p>
        </div>
    </div>
  )
}
