import React from 'react'
import { MenuitemCard , Menusubpanel, Mainmenudropdown } from '../../components/components' 

const Mainmenu = (props) => {

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
          option.map(item => 
              <Mainmenudropdown subTitle={item.title} subOptions={item.subOption}/>
                
                )
        }
    </div>
    <div className='menu-panel-2'>
    {
      props.Items.map(item => 
         
          <MenuitemCard 
            name={item.title} 
            desc={item.description} 
            id={item._id} 
            price={item.price}
            pic={item.pic}
            
            />
          )
  }
        
    </div>
    
    </div>
  )
}

export default Mainmenu
