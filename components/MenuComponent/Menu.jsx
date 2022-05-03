import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Menusubpanel , DateElement } from '../components'


const Menu = () => {

  let option = [
      {
          title:'VEG',
          subOption:['Battora','Chana Battura']
      },
      {
        title:'Non Veg',
        subOption:['Bririyani','hocho']
    }
  ]  

  return (
    <div>
    <div className='Menu-mobile'>
        <div className='Menu-panel'>
            <div className='menu-today '><h1 className='Menu-title'>Today</h1></div>
            <div className='menu-today '> <span><FontAwesomeIcon icon={faCalendar} size="1x" className="icon-align"/><DateElement/></span></div>
            <div className='problem' ></div>
            <div className='menu-today '><FontAwesomeIcon icon={faClock} size="1x" className="icon-align"/></div>
        </div>
        <div className='Menu-detail'>
        <br></br>
            <div className='Menu-Subpanel'>
                <div className='Menu-Subpanel-component'>
                    <h1 className='Menu-title'>Buffet</h1>
                </div>
                <div className='Menu-Subpanel-component'>
                    <h1 className='Menu-title'>Beverages</h1>
                </div>
                <div className='Menu-Subpanel-component'>
                    <h1 className='Menu-title'>Lunch</h1>
                </div>
                <div className='Menu-Subpanel-component'>
                    <h1 className='Menu-title'>Dinner</h1>
                </div>
            </div>
            <br></br>
            <div className='Menu-Subpanel-details'>
                {
                    option.map(options => 
                        <Menusubpanel subTitle={options.title} subOptions={options.subOption}/>
                        )
                }
                
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Menu