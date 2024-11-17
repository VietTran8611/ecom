import React, { useState } from 'react'
import data from './question.json'

export const FAQ = () => {
    const [checkedFlip, setCheckedslip] = useState(
        new Array(data.length).fill(false)
    );

    const handleExpand = (position) => {
        const updatedCheckedState = checkedFlip.map((item, index) =>
            index === position ? !item : false
          );
          setCheckedslip(updatedCheckedState);
      }; 

  return (
    <div className='container faq-container'>
        <div className='faq-left'>
            <h1>FAQ</h1>
            <h3>Answers to some questions you might have.</h3>
        </div>
        <div className='faq-right'>
        {data.map(({q,a},index)=>{
                return(
                    <div key={q} className={`qa-card`}>
                        <div className='question'>
                            <h3>{q}</h3>
                            <h3 className='qa-expand' onClick={()=>{handleExpand(index)}} >{checkedFlip[index] ? '-' : '+'}</h3>
                        </div>
                        <div className={`${checkedFlip[index] ?  'content-qa qa-show' : 'content-qa '}`}>
                        <p>{a}</p>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}
