import React from 'react'
import EmblaCarousel from './EmblaCarousal';

const SLIDE_COUNT = 10;
const slides = Array.from(Array(SLIDE_COUNT).keys());


const Imageslider = () => {
  return (
    <EmblaCarousel slides={slides} />
  )
}

export default Imageslider