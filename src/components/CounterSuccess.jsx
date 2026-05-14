import React from 'react'
import Image from './Image'
 


const CounterSuccess = ({ title, text }) => {
  return (
    <div>
       <h2 className='text-[50px] text-third font-bold font-inter'>{title}</h2>
       <p className='text-primary font-medium font-inter pt-5 pb-5'>{text}</p> 
  
    </div>
  )
}

export default CounterSuccess