import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import ServiceCard from '../components/ServiceCard'
import Flex from '../components/Flex'
import IconOne from '../assets/service.png'
import IconTwo from '../assets/service2.png'
import IconThree from '../assets/service3.png'
import IconFour from '../assets/service4.png'
import IconFive from '../assets/service5.png'
import IconSix from '../assets/service6.png'


const Service = () => {

  return (
    <section className=' pb-[103px]'>
        <Container>
<Heading text="Our Provided service" className='text-center'/>
<SubHeading text="There are many variations of
passages of Lorem Ipsum available, but themajority 
 have suffered alteration in some form." className='text-center w-[609px] mx-auto pt-5
leading-[26px] '/>
      <Flex className='flex-wrap gap-6 pt-[50px]'>
<ServiceCard image={IconOne} title="Web Design" text=" There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour,
        or randomised words which don't look."/>
<ServiceCard image={IconTwo} title=" UI/UX Design" text=" There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour,
        or randomised words which don't look."/>
<ServiceCard image={IconThree} title="Web Development" text=" There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour,
        or randomised words which don't look."/>
<ServiceCard image={IconFour} title="Motion Graphics" text=" There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour,
        or randomised words which don't look."/>
<ServiceCard image={IconFive} title="3D Animation" text=" There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour,
        or randomised words which don't look."/> 
<ServiceCard image={IconSix} title="Digital Marketing" text=" There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour,
        or randomised words which don't look."/>

      </Flex>

        </Container>
    </section>
  )
}

export default Service