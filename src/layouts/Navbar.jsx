import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Logo from '../assets/logo.png'
import Image from '../components/Image'
import ListItem from '../components/ListItem'
import Button from '../components/Button'
const Navbar = () => {
  return (
   <nav className="py-10">
      <Container>
    <Flex className='justify-between items-center'>

        <div>
            <Image src={Logo}/>
             
        </div>
        <div>
          <ul className="flex gap-x-12">
            <ListItem text="Home"/>
            <ListItem text="About"/>
            <ListItem text="Services"/>
            <ListItem text="Careers"/>
            <ListItem text="Contact"/>

            </ul>  
        </div>

        <div>
            <Button text="Contact"/>
        </div>
    </Flex>
    </Container>
   </nav>
  )
}

export default Navbar