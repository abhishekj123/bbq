import React, { useState , useRef } from 'react'
import { MenuitemCard , Menusubpanel, Mainmenudropdown } from '../../components/components' 
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons"



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

   

  return (
    <div className='Mainmenu'>
    <div className='menu-panel-1'>
    
    
    <div className='drop-down-outer'>
    
    <DropdownMenu/>
    </div>
       
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

    <div className='menu-panel-3'>
    Hello
    </div>
    
    </div>
  )
}

export default Mainmenu



const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const calcHeight=(el) =>{
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  const DropdownItem= (props) => {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )

  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
    <CSSTransition
    in={activeMenu === 'main'}
    timeout={500}
    classNames="menu-primary"
    unmountOnExit
    onEnter={calcHeight}>
    <div className="menu">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem
        
       
        goToMenu="Veg">
        Veg
      </DropdownItem>
      <DropdownItem
        
       
      goToMenu="Non-Veg">
      Non Veg 
    </DropdownItem>
     
     
      <DropdownItem
        leftIcon="🦧"
        goToMenu="Deserts">
        Deserts
      </DropdownItem>
      <DropdownItem
        leftIcon="🦧"
        goToMenu="Beverages">
        Beverages
      </DropdownItem>

    </div>
  </CSSTransition>

        <CSSTransition
        in={activeMenu === 'Veg'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<FontAwesomeIcon icon={faCircleLeft} size="2x" className="highlight" />}>
            Go Back
          </DropdownItem>
          <DropdownItem leftIcon='doosh'>Veg Starters</DropdownItem>
          <DropdownItem leftIcon='doosh'>Veg Main</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'Non-Veg'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<FontAwesomeIcon icon={faCircleLeft} size="2x" className="highlight" />}>
            Go Back
          </DropdownItem>
          <DropdownItem leftIcon='doosh'>Veg Main</DropdownItem>
          <DropdownItem leftIcon='doosh'>Non Veg Main</DropdownItem>
         
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'Deserts'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<FontAwesomeIcon icon={faCircleLeft} size="2x" className="highlight" />}>
            Go Back
          </DropdownItem>
          <DropdownItem leftIcon='doosh'>IceCream</DropdownItem>
          <DropdownItem leftIcon='doosh'>Shake</DropdownItem>
          <DropdownItem leftIcon='doosh'>Cake</DropdownItem>
          <DropdownItem leftIcon='doosh'>Pudding</DropdownItem>
         
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'Beverages'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<FontAwesomeIcon icon={faCircleLeft} size="2x" className="highlight" />}>
            Go Back
          </DropdownItem>
          <DropdownItem leftIcon='doosh'>Alcoholic</DropdownItem>
          <DropdownItem leftIcon='doosh'>Non-Alcoholic</DropdownItem>
        </div>
      </CSSTransition>
    
    </div>
    
  )
}