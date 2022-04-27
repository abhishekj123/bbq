import React from 'react'
import Image from 'next/image'
import bbq from '../../styles/bbq.jpg'
import bbq1  from '../media/bbq.jpg'
import bbq2  from '../media/bbq2.jpg'
import bbq3  from '../media/bbq3.jpg'
import { animated, useSpring } from "react-spring";

const movies = [
    bbq1,
    bbq2,
    bbq3,
    bbq3,
    bbq3

  ];

  


const Subcard = () => {

    const style = useSpring({
        from: {
          transform: "rotateY(0deg)"
        },
        transform: "rotateY(25deg)"
      });

  return (
    <div>
        <div className='Subcard-panel'>
            <div className='Subcard-panel-1'>
                <Image
                    src={bbq}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="rounded-full"
                   
                />
      
            </div>
            <div className='Subcard-panel-2'>
                <p className='heading_1'>Kuzhi Mandi <span className='hightlight-green'>On offer 15% off</span></p>
                <p>Enough for a family</p>
            </div>
            <div className='Subcard-panel-3'>
                <button className='btn-red'>Order now</button>
            </div>
        </div>
        
    </div>
  )
}

export default Subcard