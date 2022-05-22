import React, { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCircleLeft } from "@fortawesome/free-regular-svg-icons"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons"
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faIceCream } from "@fortawesome/free-solid-svg-icons";
import { faBeerMugEmpty } from "@fortawesome/free-solid-svg-icons";
import { faBeerMug } from "@fortawesome/free-solid-svg-icons";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";



const Sidebar = (props) => {

  let drawerClasses = 'Sidebar'

  if(props.show) {
    drawerClasses = 'Sidebar open'

  }
  return (
    <div className={drawerClasses}>
    <div className='Sign-User-Auth'>
        <a href='/SignIn' ><button>SignIn</button></a>
        <a href='/SignUp' ><button>SignUp</button></a>
    </div>
    <hr></hr>
    <br></br>
    <DropdownMenu/>
    </div>
  )
}

export default Sidebar





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
        <span className="Sidepanel-icon-button">{props.leftIcon}</span>
        <h1 className='icon-desc'>{props.children}</h1>
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
      <DropdownItem
        leftIcon={<FontAwesomeIcon icon={faUserCircle} size="2x" className='icon-highlight' />}
      >
        Profile
      </DropdownItem>
      <DropdownItem
        
        leftIcon={<FontAwesomeIcon icon={faBagShopping} size='2x' className='icon-highlight'  />}
        goToMenu="Veg">
        Cart
      </DropdownItem>
      <DropdownItem
      leftIcon={<FontAwesomeIcon icon={faCircleCheck} size="2x" className='icon-highlight'  />}
      goToMenu="Non-Veg">
      Orders 
    </DropdownItem>
     
     
      <DropdownItem
      
        leftIcon={<FontAwesomeIcon icon={faEllipsisVertical} size="2x" className='icon-highlight'  />}
        goToMenu="Deserts">
        Categories
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
          <DropdownItem goToMenu="main" leftIcon={<FontAwesomeIcon icon={faCircleLeft} size="2x" className='icon-highlight' />}>
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
          <DropdownItem goToMenu="main" leftIcon={<FontAwesomeIcon icon={faCircleLeft} size="2x" className='icon-highlight' />}>
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
          <DropdownItem goToMenu="main" leftIcon={<FontAwesomeIcon icon={faCircleLeft} size="2x" className='icon-highlight' />}>
            Go Back
          </DropdownItem>
          
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faIceCream} size="2x" className='icon-highlight' />}>IceCream</DropdownItem>
          
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faBeerMugEmpty} size="2x" className='icon-highlight' />}>Shake</DropdownItem>
          
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faCakeCandles} size="2x" className='icon-highlight' />}>Cake</DropdownItem>
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faCircle} size="2x" className='icon-highlight' />}>Veg Starters</DropdownItem>
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faStar} size="2x" className='icon-highlight' />}>Veg Main</DropdownItem>
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faCircle} size="2x" className='icon-highlight' />}>Non Veg Starters</DropdownItem>
          <DropdownItem leftIcon={<FontAwesomeIcon icon={faStar} size="2x" className='icon-highlight' />}>Non Veg Main</DropdownItem>
         
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