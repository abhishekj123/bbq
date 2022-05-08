import React from 'react'
import Image from 'next/image'
import bbq from '../../styles/bbq.jpg'
import bbq1  from '../media/bbq.jpg'
import bbq2  from '../media/bbq2.jpg'
import bbq3  from '../media/bbq3.jpg'
import { animated, useSpring } from "react-spring";



  


const Subcard = () => {

    

  return (
    <div className='Subcard-panel'>
        <div className='Subcard-panel-1'>
        <Image
                src='https://firebasestorage.googleapis.com/v0/b/restuarantsig.appspot.com/o/restimage%2FNoodles3.png?alt=media&token=5e02bda3-0ad0-40a5-aa45-46541fd28a55'
                alt="Picture of the author"
                width="200px"
                height="200px"
        />
        </div>
        <div className='Subcard-panel-2'>
          <div>Description</div>
          <div>Add to cart</div>
        </div>
        
        
    </div>
  )
}

export default Subcard