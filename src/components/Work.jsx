import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import WorkPart from '../components/WorkPart'
import WorkCard from '../components/WorkCard'
import IconOne from '../assets/work1.png'
import IconTwo from '../assets/work2.png'
import IconThree from '../assets/work3.png'
import IconFour from '../assets/work4.png'
import IconFive from '../assets/work5.png'
import IconSix from '../assets/work6.png'

const Work = () => {
  return (
    <section className=" bg-[#F3F3F3] pb-[162px]">
        <Container>
           <Heading text="Our Recent Work" className='text-center'/>
            <SubHeading text="There are many variations of passages of Lorem Ipsum available, but themajority
              have suffered alteration in some form." className='text-center w-[620px]
              text-[16px] mx-auto pt-4 font-inter font-normal leading '/>
              <div>
          <Flex>
             <ul className="w-[424px] flex gap-x-[200px] py-[100px] items-center justify-between pt-[70px] pb-[10px]">
            <WorkPart text='All'/>
           <WorkPart text='Mobile Design'/>
           <WorkPart text='Web design'/>
           <WorkPart text='Branding'/>
           <WorkPart text='Illustration'/>
           <WorkPart text='Digital Marketing'/>
           </ul>
      
          </Flex>
         <div className='flex flex-wrap'>
          
         <WorkCard image={IconOne} title="" text="" />
          <WorkCard image={IconTwo} title="" text="" />
          <WorkCard image={IconThree} title="" text="" />
          <WorkCard image={IconFour} title="" text="" />
          <WorkCard image={IconFive} title="" text="" />
          <WorkCard image={IconSix} title="" text="" />
         </div>
              </div>
             
        </Container>
      
    </section>
  )
}

export default Work