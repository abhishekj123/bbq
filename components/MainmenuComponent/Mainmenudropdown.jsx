import React, { useState } from 'react'

const Mainmenudropdown = (props) => {

    const [showSub, setshowSub] = useState(false)

  return (
    <div className='Main-menu-dropdown'>
        
                    <div className='Main-menu-Subpanel-details-option'>
                        <h1 className='Menu-title'>{props.subTitle}</h1>
                        <button className='expand-button' onClick={() => setshowSub(!showSub)}>
                        +
                        </button>
                    </div>
                    
        

        { showSub &&
            
            props.subOptions.map(subOptions => 
                <div className='Main-dropdown-sub-Option-Panel '>
                    <button>{subOptions}</button>
                        
                </div>
                )
        }
        
    </div>
  )
}

export default Mainmenudropdown