import React from 'react'
import ImageSlide  from '../ImageSliderComponent/ImageSlide'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button , Card , CardContent , Box , Typography , CardActions , CardMedia  } from '@mui/material'


const Slider = () => {
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
    <div><CardFragment/></div>
</Carousel>

</div>
)
}

export default Slider

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

function CardFragment(){
    return (
        <div >
        
        </div>
    )
}