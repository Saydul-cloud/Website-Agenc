import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'

const Contact = () => {
  return (
  <section className='bg-[#F3F3F3] py-150 '>
    <Container>
        <Flex className='items-center'>
<div className='w-1/2 '>
<Heading className='w-[450px] pb-5' text="We Do design, Code & Development"/>
<SubHeading className='w-[514] leading-[26px]' text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations 
of passages of Lorem Ipsum available, but the majority."/>
<SubHeading className='w-[514px] leading-[26px] pt-2.5' text="There are many variations of passages of Lorem Ipsum available,
 but themajority  have suffered alteration in some form."/>
</div>
<div className='w-1/2 '>
<div className=' py-[61px] px-[43px] w-[536px]  bg-white rounded-[20px]'>
<h4 className='text-[30px] text-third font-bold mb-[30px] font-inter text-center'>Get a free quote now</h4>
<label className='text-base text-black font-inter font-medium
   'htmlFor="name">Name
<input id='name' className=' w-full border border-[#E8E8E8] rounded-md 
 py-4 px-6 mt-2.5 mb-5  text-2xl text-red-500 placeholder:text-blue-500
  placeholder:text-2xl'
 type="text" placeholder='Enter your name'/>

</label>
<label className='text-base text-black font-inter font-medium
   'htmlFor="email">Email
<input id='email' className=' w-full border border-[#E8E8E8] rounded-md 
 py-4 px-6 mt-2.5 mb-5  text-2xl text-red-500 placeholder:text-blue-500
  placeholder:text-2xl'
 type="email" placeholder='Enter your email'/>

</label>
<label className='text-base text-black font-inter font-medium
   'htmlFor="phone">Phone
<input id='phone' className=' w-full border border-[#E8E8E8] rounded-md 
 py-4 px-6 mt-2.5 mb-5  text-2xl text-red-500 placeholder:text-blue-500
  placeholder:text-2xl'
 type="text" placeholder='Enter your phone number'/>

</label>

<Button className='w-full mt-[29px]' text="Get Pricing Now"/>
 
</div>

</div>
        </Flex>
    </Container>
  </section>
  )
}

export default Contact