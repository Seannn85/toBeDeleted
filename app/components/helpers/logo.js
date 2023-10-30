import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    
    <div className='ml-2 mr-6'> 
    <Image
    src="/logo.png"
    width={100}
    height={100}
    alt="Logo of Projexe"
  />

</div>
  )
}

export default Logo