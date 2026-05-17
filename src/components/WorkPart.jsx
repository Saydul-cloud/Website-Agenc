import React from 'react'
import Image from'./Image'

const WorkPart = ({text,className}) => {
  return (
   
   <div>
  
      <li className={`text-lg text-primary font-normal cursor-pointer
        font-inter hover:text-secondary  hover:font-bold 
        duration-300 ${className}`}>

            {text}

        </li>
      
   </div>
   

   
  
  )
}

export default WorkPart