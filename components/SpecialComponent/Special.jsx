import React from 'react'
import { Subcard } from '../components'

const Special = () => {
  return (
    <div className='special-main section__padding'>
        <div className='special-panel'>
            <h1 className='heading'>SPECIALS</h1>
            <Subcard/>
            <Subcard/>
        </div>
    </div>
  )
}

export default Special