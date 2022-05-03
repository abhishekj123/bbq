import React, { useState } from 'react'

const Menusubpanel = (props) => {

    const [showSub, setshowSub] = useState(false)

    

  return (
    <div className='Menu-Subpanel-details-option'>
        <div className='Menu-option-panel'>
                    <div className='Menu-Subpanel-details-option-label'>
                        <h1 className='Menu-title'>{props.subTitle}</h1>
                    </div>
                    <button className='Menu-Subpanel-details-option-expand' onClick={() => setshowSub(!showSub)}>
                        +
                    </button>
        </div>

        { showSub &&
            
            props.subOptions.map(subOptions => 
                <div className='sub-Option-Panel'>
                        {subOptions}
                </div>
                )
        }
        
    </div>
  )
}

export default Menusubpanel