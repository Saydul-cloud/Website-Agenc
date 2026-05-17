import React from 'react'
import Image from './Image'
import SubHeading from './SubHeading'
import { ImImages } from 'react-icons/im'

const AgencyCard = ({image,title,text,className}) => {
  return (
   <div className={`w-[344px] ${className}`}>
        <Image src={image}/>
        <h3 className='text-2xl text-third
        pt-5 pb-0.5 font-bold font-inter'>{title}</h3>
       <SubHeading className='w-[310px]' text={text}/>
       </div>
  )
}

export default AgencyCard