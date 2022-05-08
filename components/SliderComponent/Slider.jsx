import React, { useState } from 'react'
import ImageSlide  from '../ImageSliderComponent/ImageSlide'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button , Card , CardContent , Box , Typography , CardActions , CardMedia  } from '@mui/material'
import bbq from '../media/bbq2.jpg'

const Slider = (props) => {
  
    const [array, setarray] = useState([...props.arrayItem])
console.log(array)
return (
<div className='Gallery-Panel'>
<Carousel>
    <div>hello</div>
    <div>hai</div>
</Carousel>

</div>
)
}

export default Slider

function Item(props)
{
    return (
        <Paper>
            <h2>{props.name}</h2>
            
        </Paper>
    )
}

function CardFragment(){
    return (
        <div >
        hello
        </div>
    )
}