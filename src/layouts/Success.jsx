import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import CounterSuccess from '../components/CounterSuccess'
import ProfileOne from '../assets/unname.png'
import { FaStar } from "react-icons/fa";
const Success = () => {
  return (
    <section className="py-[150px]">
        <Container>
            <Flex className='bg-[#F8F6FE] py-[86px] px-12 rounded-[20px]'>
               <div className='w-5/12 '>
               <h6 className='text-2xl text-[#6A4DF4] font-medium
               font-["Inter"]'>Our Success</h6>
               <h4 className='w-[387px]text-4xl text-[#151515] font-semibold
               font-["Inter"]'>West cost Brand makers-Global Edge</h4>

                             </div> 
               <div className='w-7/12'>
              <Flex className='justify-between'>
               <div>
                  <CounterSuccess title="200+" text="Customer Satisfied"/>
                  <div className='relative'>
<div className=' absolute top-[0px] left-[0] w-[35px] h-[35px] rounded-full '>
     <Image className='w-full rounded-full' src={ProfileOne}/>
   </div>
   <div className=' absolute top-[0px] left-[15px] w-[35px] h-[35px] rounded-full '>
     <Image className='w-full rounded-full' src={ProfileOne}/>
   </div>
   <div className=' absolute top-[0px] left-[30px] w-[35px] h-[35px] rounded-full '>
     <Image className='w-full rounded-full' src={ProfileOne}/>
   </div>
   <div className=' absolute top-[0px] left-[60px] w-[35px] h-[35px] rounded-full '>
     <Image className='w-full rounded-full' src={ProfileOne}/>
   </div>
   <div className=' absolute top-[0px] left-[60px] w-[35px] h-[35px] rounded-full '>
     <Image className='w-full rounded-full' src={ProfileOne}/>
   </div>
   
   
   </div>
               </div>
                 <div>
                   <CounterSuccess title="4.5" text="200+ Avg rating"/>
                   <ul className="flex gap-x-3 ">
                    <li><FaStar className='text-[#FFC700]' /></li>
                    <li><FaStar className='text-[#FFC700]' /></li>
                    <li><FaStar className='text-[#FFC700]' /></li>
                    <li><FaStar className='text-[#FFC700]' /></li>
                    <li><FaStar className='text-[#FFC700]' /></li>
                   </ul>
                   </div> 
              <div>
                <CounterSuccess title="351" text="Project Delivered"/>
             <a className="text-[#6A4DF4] font-medium text-base" href="">See Work</a>
              </div>
               
              </Flex>
               </div> 
            </Flex>
        </Container>
    </section>
  )
}

export default Success