import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Subheading from '../components/SubHeading'
import AgencyCard from '../components/AgencyCard'
import IconOne from '../assets/agency1.png'
import IconTwo from '../assets/agency2.png'
import IconThree from '../assets/agency3.png'
import Image from '../components/Image'
import Agency4 from '../assets/agency4.png'

const Agency = () => {
  return (
  <section className='pb-[150px]' >
<Container>
  <Flex className='items-end'>
<div className='w-7/12'>
<Heading className='w-[508px] mt-[144px]' text="Why You Should Choose Agenc"/>
<Subheading className='w-[480px] pt-5 pb-[85px]' text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
  or randomised words which don't look even slightly believable."/>
  <Flex>
    <AgencyCard image={IconOne} title="Innovative Ideas" text="Because each project is different, we adapt to your business model."/>
  <AgencyCard className="mt-10" image={IconTwo} title="Dedicated Support" text="We provide 24/7 support for all our clients and serve them professionally."/>
 </Flex>
 <div className='ml-[200px] pt-[80px]'>
   <AgencyCard image={IconThree} title="Honest Pricing" text="Pricing on projects are based on various analyzes and are cost effective."/>
  
 </div>
</div>
<div className='w-5/12'>
<Image src={Agency4}/>


</div>
  </Flex>
</Container>
  </section>
  )
}

export default Agency