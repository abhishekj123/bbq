import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faBowlRice } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Navbar , Menu  } from '../components/components' 

export default function Component() {
  const { data: session } = useSession()
 
    return (
      <div>

        
      <div className="Div2">
      <Navbar/>
  <div className='banner'>
      <div className='banner-info'>
      
          <h1 className='banner-title'>
              Restaurant in
              Trivandrum Panachamootil Square
          </h1>
          <div className='banner-icons'>
              <div>
              <button className='btn-solid'><span className='icon-span'><FontAwesomeIcon icon={faLocationDot} size="lg" /></span>Direction</button>
              </div>
              <div>
              <button className='btn-light'><span className='icon-span'><FontAwesomeIcon icon={faShareNodes} size="lg" /></span>Share</button>
              </div>
              <div>
              <button className='btn-blank'><span className='icon-span'><FontAwesomeIcon icon={faFacebook} size="2x" className="highlight"/></span></button>
              </div>
              <div>
              <button className='btn-blank'><span className='icon-span'><FontAwesomeIcon icon={faTwitter} size="2x" className="highlight"/></span></button>
              </div>
              <div>
              <button className='btn-blank'><span className='icon-span'><FontAwesomeIcon icon={faInstagram} size="2x" className="highlight"/></span></button>
              </div>
          </div>
          <div className='banner-icons-mobile'>
              <div>
              <button className='btn-solid'><span className='icon-span'><FontAwesomeIcon icon={faLocationDot} size="1x" /></span>Direction</button>
              </div>
              <div>
              <button className='btn-light'><span className='icon-span'><FontAwesomeIcon icon={faShareNodes} size="1x" /></span>Share</button>
              </div>
              <div>
              <button className='btn-blank'><span className='icon-span'><FontAwesomeIcon icon={faFacebook} size="2x" className="highlight"/></span></button>
              </div>
              <div>
              <button className='btn-blank'><span className='icon-span'><FontAwesomeIcon icon={faTwitter} size="2x" className="highlight"/></span></button>
              </div>
          <div>
          <button className='btn-blank'><span className='icon-span'><FontAwesomeIcon icon={faInstagram} size="2x" className="highlight"/></span></button>
          </div>
      </div>
      </div>
  </div>
  <div className='Menu'>
  
      <div className='Menu-Panel-1'>
          <div className='Menu-Nav'>
              <div className='bbq-text-heading-light'><a href='#overview'>OVERVIEW</a></div>
              <div className='bbq-text-heading-light'><a href='#menu'>MENU</a></div>
              <div className='bbq-text-heading-light'><a href='#offer-promotion'>OFFER & PROMOTION</a></div>
              <div className='bbq-text-heading-light'><a href='#gallery'>GALLERY</a></div>
              <div className='bbq-text-heading-light'><a href='#about'>ABOUT RESTAURANT</a></div>
          </div>
         
          <div id="overview" className='Menu-info'>
              <h1 className='bbq-text-heading-1'>OVERVIEW</h1>
              <div className='Menu-details'>
                  <div > 
                      <p className='bbq-text-heading-2'><span className='icon-span'><FontAwesomeIcon icon={faMapLocationDot} size="1x" className="highlight"/></span>Address </p>
                      <p className='bbq-text-dec'>2nd Floor, Virginia Mall, Varthur Rd, Varthur Kodi, Palm Meadows, Ramagondanahalli, Whitefield, Bengaluru,560066</p>
                  </div>
                  <div >
                      <p className='bbq-text-heading-2'><span className='icon-span'><FontAwesomeIcon icon={faBowlRice} size="1x" className="highlight"/></span>Restaurant Info</p>
                      <p>9071569991
                      feedback@barbequenation.com</p>
                  </div>
                  <div >
                      <p className='bbq-text-heading-2'><span className='icon-span'><FontAwesomeIcon icon={faClock} size="1x" className="highlight"/></span>Open hour</p>
                      <p>
                      12:00 pm to 04:00 pm
06:30 pm to 11:00 pm
                      </p>
                  </div>
                  <div>
                      <p className='bbq-text-heading-2'><span className='icon-span'><FontAwesomeIcon icon={faClock} size="1x" className="highlight"/></span>Car Parking <span className='text-highlight-yes'>Available</span></p>
                      
                  </div>
                  <div>
                      <p className='bbq-text-heading-2'><span className='icon-span'><FontAwesomeIcon icon={faClock} size="1x" className="highlight"/></span>Lift Facilities <span className='text-highlight-yes'>Available</span></p>
                      
                  </div>
                  <div>
                      <p className='bbq-text-heading-2'><span className='icon-span'><FontAwesomeIcon icon={faClock} size="1x" className="highlight"/></span>Door delivery <span className='text-highlight-no'>Not Available</span></p>
                      
                  </div>

              </div>
          </div>
          <div id="overview" className='Menu-info-mobile'>
              <h1 className='bbq-text-heading-1'>OVERVIEW</h1>
              <div className='Menu-details'>
                  <div className='Menu-details-subpanel'> 
                      <p className='bbq-text-heading-2'><span className='icon-span-menu'><FontAwesomeIcon icon={faMapLocationDot} size="1x" className="highlight"/></span>Address </p>
                      <p className='bbq-text-dec'>2nd Floor, Virginia Mall, Varthur Rd, Varthur Kodi, Palm Meadows, Ramagondanahalli, Whitefield, Bengaluru,560066</p>
                  </div>
                  <div className='Menu-details-subpanel'>
                      <p className='bbq-text-heading-2'><span className='icon-span-menu'><FontAwesomeIcon icon={faBowlRice} size="1x" className="highlight"/></span>Restaurant Info</p>
                      <p className='bbq-text-dec'>9071569991
                      feedback@barbequenation.com</p>
                  </div>
                  <div className='Menu-details-subpanel'>
                      <p className='bbq-text-heading-2'><span className='icon-span-menu'><FontAwesomeIcon icon={faClock} size="1x" className="highlight"/></span>Open hour</p>
                      <p className='bbq-text-dec'>
                      12:00 pm to 04:00 pm
06:30 pm to 11:00 pm
                      </p>
                  </div>
                  <div className='Menu-details-subpanel'>
                      <p className='bbq-text-heading-2'><span className='icon-span-menu'><FontAwesomeIcon icon={faPersonWalking} size="1x" className="highlight"/></span>Amenities </p>
                      <div className='Amenities-panel'>
                      <div className='Amenities-subpanel_1'> <p className='bbq-text-dec'>Car Parking - </p></div>
                      <div className='Amenities-subpanel_2'><p className='text-highlight-yes'>Available</p></div>
                      
                      </div>
                      <br></br>
                      
                      <div className='Amenities-panel'>
                      <div className='Amenities-subpanel_1'> <p className='bbq-text-dec'>Lift Facilities - </p></div>
                      <div className='Amenities-subpanel_2'><p className='text-highlight-yes'>Available</p></div>
                      
                      </div>
                      <br></br>
                      <div className='Amenities-panel'>
                      <div className='Amenities-subpanel_1'> <p className='bbq-text-dec'>Door delivery - </p></div>
                      <div className='Amenities-subpanel_2'><p className='text-highlight-no'>Available</p></div>
                      
                      </div>
                      
                  </div>
                  

              </div>
          </div>
          <div   className='Menu-info-mobile'>
              <h1 className='bbq-text-heading-1'>MENU</h1>
              <Menu/>
              </div>
              <div id="offer-promotion" className='Menu-info-mobile'>
                  <h1 className='bbq-text-heading-1'>OFFER & PROMOTION</h1>
              </div>
              <div  className='Menu-info-mobile'>
                  <h1 className='bbq-text-heading-1'>GALLERY</h1>
              </div>
              <div id="about" className='Menu-info-mobile'>
                  <h1 className='bbq-text-heading-1'>ABOUT RESTAURANT</h1>
              </div>
          <div id="menu"  className='Menu-info'>
              <h1 className='bbq-text-heading-1'>MENU</h1>
              <Menu/>
              </div>
              <div id="offer-promotion" className='Menu-info'>
                  <h1 className='bbq-text-heading-1'>OFFER & PROMOTION</h1>
                  
              </div>
              <div id="gallery" className='Menu-info'>
                  <h1 className='bbq-text-heading-1'>GALLERY</h1>
                  
              </div>
              <div id="about" className='Menu-info'>
                  <h1 className='bbq-text-heading-1'>ABOUT RESTAURANT</h1>
              </div>
          </div>
          <div className='Menu-Panel-2'></div>
  </div>


  <div className="Div3"> 
  <h1 className='heading_1'>Let us server you better</h1>
  <p>Don't wait in a line to enjoy your meal.Reserve a table in advance with us</p>
  <p>Location</p>
  <div className='location'><p>Trivandrum Pnachimooti</p></div>
  <p>Date</p>
  <div className='date-panel'>
      <div className='container_1'>
          Today
      </div>
      <div  className='container_2'>
          Tomorrow
      </div>
      <div  className='container_3'>
          26/07/2021
      </div>
  </div>
  <p>Session</p>
  <div className='date-panel'>
      <div className='container_1'>
          Lunch
      </div>
      <div  className='container_2'>
          Dinner
      </div>
      <div  className='container_3'>
          26/07/2021
      </div>
  </div>
  </div>



  </div>

  </div>
    )
 
  
}