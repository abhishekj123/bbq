import React from 'react'
import Image from 'next/image'

const MenuitemCard = (props) => {
  return (
    <div className='Subcard-panel'>
    <div className='Subcard-panel-1'>
    <Image
            src={props.pic}
            alt="Picture of the author"
            width="300px"
            height="300px"
    />
    </div>
    <div className='Subcard-panel-2'>
    <a href={'http://localhost:3000/items/'+`${props.id}`}>
      <div className='Subcard-Heading'><h1>{props.name}</h1></div>
      <div className='Subcard-price'>$ 37.99</div>
      <div className='Subcard-Description'>{props.desc}</div>
      </a>
    </div>
    <div className='Subcard-panel-3'>
      <button>Add to Card</button>
    </div>
    
    
</div>
  )
}

export default MenuitemCard