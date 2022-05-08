import React from 'react'
import Image from 'next/image'
import Rating from '@mui/material/Rating';

const Card = (props) => {
  return (
    <div className='Card'>
    <a href={'http://localhost:3000/items/'+`${props.id}`}>
    <Image
    src="https://firebasestorage.googleapis.com/v0/b/restuarantsig.appspot.com/o/restimage%2FNoodles3.png?alt=media&token=5e02bda3-0ad0-40a5-aa45-46541fd28a55"
    alt="Picture of the author"
    width="350px"
    height="200px"
  />
  
    <div className='Card-Title'>
        <h1>{props.title}</h1>
        <Rating name="read-only" value='4' readOnly />
    </div>
    
    <div className='Card-description'>
        <p >{props.description}</p>
    </div>
    <div className='Card-Bottom'>
        <button>Add to Cart</button>
    </div>
    </a>
    </div>
  )
}

export default Card