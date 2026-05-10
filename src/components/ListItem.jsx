import React from 'react'

const ListItem = ({text,className}) => {
  return (
    <div>
         <li className={`text-lg text-[#737373] font-normal cursor-pointer
        font-["inter"] hover:text-[6A4DF4] hover:text-[#6A4DF4] hover:font-bold 
        duration-300 transition-all ease-in-out ${className}`}>

            {text}
        </li>
    </div>
  )
}

export default ListItem