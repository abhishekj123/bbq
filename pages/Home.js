import React from 'react'
import { Navbar ,Menu , Special , Imageslider , ImageSlide , Slider , Location , Animate} from '../components/components'



const Home = () => {
  return (
    <div>
    <Menu/>
    <Navbar/>
    {/*<Banner/>*/}
    <Special/>
    {/* <Imageslider/> */}
    
    <Slider/>
    <Location/>
    <Animate/>
    </div>
  )
}

export default Home