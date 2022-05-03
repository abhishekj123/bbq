import React, { useState } from 'react'
import Image from 'next/image'
import bbq1 from '../media/bbq2.jpg'
import { DateElement } from '../components'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button , Card , CardContent , Box , Typography , CardActions , CardMedia  } from '@mui/material'



const Gallery = () => {
    
        let divStyle = {
            backgroundImage: 'url(' + {bbq1} + ')',
            width: '300px',
            height:'250px'
          };
          
        const items = [
            {
                name: "Random Name #1",
                description: "Probably the most random thing you have ever seen!"
            },
            {
                name: "Random Name #2",
                description: "Hello World!"
            }
        ]

  return (
    <div className='Gallery-Panel'>
        <Carousel>
            <div>
            <Image
                src={bbq1}
                alt="Picture of the author"
                width="350px"
                height="300px"
            />
            <Image
                src={bbq1}
                alt="Picture of the author"
                width="350px"
                height="300px"
            />
            </div>
            <div style={divStyle}></div>
        </Carousel>
        
    </div>
  )
}

export default Gallery


