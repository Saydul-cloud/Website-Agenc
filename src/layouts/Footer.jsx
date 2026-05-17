import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import FooterLogo from '../assets/Logo.png'
import SubHeading from '../components/SubHeading'
import FooterList from '../components/FooterList'

const Footer = () => {
  return (
   <footer className='pt-150'>
    <Container>
        <Flex>
         <div className='w-4/12 '>
         <Image src={FooterLogo}/>
         <SubHeading className='w-[356px] pt-[30px]' text="I had a good experience while using this app, what fascinated me was the live tracking
          feature There are many variations of passages of Lorem
           Ipsum available, but the majority."/>

         </div>
         <div className='w-2/12 '>
         <strong className='text-xl text-third font-inter font-semibold'> About </strong>
         <ul className='flex flex-col gap-y-5 mt-10'>
           <FooterList text="About Us"/>
           <FooterList text="Features"/>
           <FooterList text="News"/>
           <FooterList text="Careers"/>
         </ul>
         </div>
         <div className='w-2/12 '>
         <strong className='text-xl text-third font-inter font-semibold'> Company </strong>
         <ul className='flex flex-col gap-y-5 mt-10'>
           <FooterList text="Our Team"/>
           <FooterList text="Partner With U"/>
           <FooterList text="FAQ"/>
           <FooterList text="Careers"/>
         </ul>
         </div>
         <div className='w-2/12 '>
         <strong className='text-xl text-third font-inter font-semibold'>Support </strong>
         <ul className='flex flex-col gap-y-5 mt-10'>
           <FooterList text="Support"/>
           <FooterList text="Support Cente"/>
           <FooterList text="Feedback"/>
           <FooterList text="Accesbility"/>
         </ul>
         </div>
         <div className='w-2/12 '>
         <strong className='text-xl text-third font-inter font-semibold'> Get In Touch </strong>
         <ul className='flex flex-col gap-y-5 mt-10'>
           <FooterList text="info@gmail.co"/>
           <FooterList text="+88 0121 0212"/>
         
         </ul>
         </div>
         
        </Flex>
        <div className='border-t border-[#E8E8E8] mt-12 pt-20 pb-[40px]'>
<p className='text-center text-base text-primary font-inter font-normal'>All creadit goes to @agence.com</p>

        </div>
    </Container>
   </footer>
  )
}

export default Footer