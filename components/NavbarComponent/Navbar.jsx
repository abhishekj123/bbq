import React, { useState } from 'react'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/pro-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/pro-solid-svg-icons @fortawesome/pro-light-svg-icons @fortawesome/pro-duotone-svg-icons @fortawesome/free-brands-svg-icons


const Navbar = () => {

  const [toggleMenu, settoggleMenu] = useState(false)

  return (
    
    <nav className="Navbar section__padding">
      
          <div className='Navbar-links'>
            <h1>BBQ-<i>Nation</i></h1>
          </div>
          <div className='Navbar-menu-container'>
            <Menu/>
          </div>
          <div className='Navbar-sign'>
          <div className='sign-main'>
            <h1 className='btn-base'>SignIn</h1>
            <h1 className='btn-base highlight-red'>SignUp</h1>
          </div>  
            <h1 className='logo-base'><FontAwesomeIcon icon={faCartShopping} size="lg"/></h1>
            <h1 className='logo-base'><FontAwesomeIcon icon={faPhone}  size="lg" /></h1>
          </div>
          <div className='navbar-menu-mobile'>
            { toggleMenu 
                        ? <FontAwesomeIcon icon={faXmark} size="lg" onClick={()=> settoggleMenu(false)}/>
                        : <FontAwesomeIcon icon={faBars} size="lg" onClick={()=> settoggleMenu(true)}/>
                       
            }
            { toggleMenu && (
                <div className='navbar-menu-mobile-container scale-up-center'>
                    <div className='gpt3__navbar-menu_container_links'>
                        <Menu/>
                        <div className='Navbar-sign-container'>
                          <div className='sign'>
                            <h1  className='btn-base highlight-grey' >SignIn</h1>
                            <h1 className='btn-base highlight-red'>SignUp</h1>
                          </div>
                         
                          </div>
                    </div>
                </div>
            )

            }
        </div>
     
    </nav>

  )
}

export default Navbar


const Menu = () => (
  <>
  <h1><a href='#home'>Specials</a></h1>
  <h1><a href='#wgpt3'>Menu</a></h1>
  <h1><a href='#possibility'>Locations</a></h1>
  </>
)