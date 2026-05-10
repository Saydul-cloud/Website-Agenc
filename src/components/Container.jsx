import React from 'react'

const Container = ({children}) => {
  return (
    <div  className='w-[1320px] mx-auto h-[300px] bg-red-500'> 
        {children}
    </div>
  )
}

export default Container