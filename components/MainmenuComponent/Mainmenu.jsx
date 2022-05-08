import React from 'react'
import { MenuitemCard } from '../../components/components' 

const Mainmenu = () => {

    let menuItem=["Shawarma               "
    ,"Hot Treats             "
    ,"ZAM ZAM COMBOS         "
    ,"Fried Rice Combo       "
    ,"Fried Rice             "
    ,"Starters               "
    ,"Zam Zam Digesters      "
    ,"Zam Zam Lassi          "
    ,"RAMADAN SNACKS         "
    ,"RAMADAN COMBO          "
    ,"Breakfast              "
    ,"Breakfast Curry        "
    ,"Breakfast Combo        "]

  return (
    <div className='Mainmenu'>
    <div className='menu-panel-1'>
        {
            menuItem.map(item => 
             <h1>{item}</h1>   
                
                )
        }
    </div>
    <div className='menu-panel-2'>
        <MenuitemCard/>
        <MenuitemCard/>
        <MenuitemCard/>
        <MenuitemCard/>
        <MenuitemCard/>
        <MenuitemCard/>
        <MenuitemCard/>
        <MenuitemCard/>
        <MenuitemCard/>
        <MenuitemCard/>
        <MenuitemCard/>
        <MenuitemCard/>
    </div>
    <div className='menu-panel-3'>
        <h1>My Cart </h1>
    </div>
    </div>
  )
}

export default Mainmenu
