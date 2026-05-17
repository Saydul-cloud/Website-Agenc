import React from 'react'
import Navbar from './layouts/Navbar'
import Banner from './layouts/Banner'
import Success from './layouts/Success'
import Heading from './components/Heading'
import SubHeading from './components/SubHeading'
import Service from './layouts/Service'
import Image from './components/Image'
import IconOne from './assets/service.png'
import Work from './components/Work'
import Agency from './layouts/Agency'
import Contact from './layouts/Contact'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Success/>
      <Service/>
      <Work/>
<Agency/>
      
<Contact/>
<Footer/>




    </div>
  )
}

export default App