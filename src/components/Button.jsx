import React from 'react'

const Button = ({text,className}) => {
  return (
    <div>
         <button className={`bg-secondary py-[15px] px-[42px] text-white text-xl
     font-semibold font-["inter"] rounded-[15px] border-2 border-trnsparent  hover:bg-transparent
     hover:bg-transparent hover:text-secondary hover:border-secondary duration-300 transition-all
     ${className}`}> {text}
     </button>
    </div>
  )
}

export default Button