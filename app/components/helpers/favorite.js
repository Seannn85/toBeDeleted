'use client'

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'




const Favorite = () => {

  library.add(faCheckSquare, faCoffee);
  library.add(faStar);

  return (
<div className="flex items-center p-2 mx-5">


<FontAwesomeIcon icon={faStar} style={{color: "#bfbfbf",}} />
      <div className='px-4 text-gray-300 text-sm'> Favorites </div>

 
</div>

  )
}

export default Favorite

