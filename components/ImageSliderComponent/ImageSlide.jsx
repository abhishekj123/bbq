import React, { useState , useRef } from 'react'
import Image from 'next/image'
import bbq from '../../styles/bbq.jpg'
import bbq1  from '../media/bbq.jpg'
import bbq2  from '../media/bbq2.jpg'
import bbq3  from '../media/bbq3.jpg'
import bbq4  from '../media/bbq4.jpg'
import  { motion } from 'framer-motion'


const movies = [
        bbq1,
        bbq2,
        bbq3,
        bbq3,
        bbq4,
        bbq1,
        bbq2,
        bbq3,
        bbq3,
        bbq3

  ];

  const loop = (start,offset,array) => {
    let  result = array.slice(start, offset);
    return result
  }

const ImageSlide = () => {
    const [Array, setArray] = useState([
        bbq1,
        bbq2,
        bbq3,
        bbq3,
        bbq3,
        bbq1,
        bbq2,
        bbq3,
        bbq3,
        bbq3
    
      ])

     
      const [start, setstart] = useState(0)
   
      const refCount = useRef(0)

   

      const handleArrayNext = () => {
        if(refCount.current+3 < movies.length){
        refCount.current = refCount.current +3
        setstart(start+3)
        let array = loop(refCount.current,refCount.current +3,movies)
        setArray([...array])
       
        }
      }

      const handleArrayPrev = () => {
        refCount.current = refCount.current -3
        console.log(start,start+3)
        if(refCount.current+3 > 3) {
            let array = loop(Math.abs(refCount.current -3),Math.abs(refCount.current),movies)
        //setoffset(offset+3)
        setstart(start-3)
        setArray([...array])
        console.log("clicked")
        console.log(array)
        
        }
        console.log(start,start+3)
        

      }

  return (
      <div className='image-panel'>
        <div className='prev' onClick={handleArrayPrev}>
        prev
        </div>
        <div className='container'>

        {Array.map((x) => (
            <motion.div 
                initial='hidden'
                animate='visible'
                variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible:{
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 0.4
                        }
                    }
                }}
            >
            <div className='section' >
                        <Image
                              src={x}
                              alt="Picture of the author"
                              width={300}
                              height={150}
                              
                        />
                        <div className='card-text'>
                        <h1>Ready For history</h1>
                        <div className='highlight-line'></div>
                        
                        <p>The key are your comsasasasasascpass , Lost not gone there is a difference</p>
                        </div> 

            </div>
            </motion.div>
            
            
                      ))}
        </div>
        <div className='next' onClick={handleArrayNext}>Next</div>
    </div>
  )
}

export default ImageSlide