import React from 'react'
import Image from './Image'

import SubHeading from './SubHeading'

const ServiceCard = ({image,title,text}) => {
  return (
     <div className='w-[424px] py-12 px-14 text-center hover:shadow
     -lg duration-300 rounded-[20px] '>
        <Image className='mx-auto' src={image}/>
        <h3 className='text-2xl text-third
        pt-10 pb-5 font-bold font-inter'>{title}</h3>
       <SubHeading className='text-center' text={text}/>
       </div>
  )
}

export default ServiceCard