import React from 'react'
import { Navbar , Banner , Special , Imageslider , ImageSlide , Slider , Location , Animate} from '../components/components'



const Home = () => {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <Special/>
    {/* <Imageslider/> */}
    
    <Slider/>
    <Location/>
    <Animate/>
    </div>
  )
}

export default Home