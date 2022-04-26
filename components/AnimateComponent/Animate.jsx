import React from 'react'
import { useSpring, animated, config } from '@react-spring/web'


export default function Animate() {
  const [{ background }] = useSpring(
    () => ({
      from: {
        background: 'var(--from, pink)',
      },
      to: {
        background: 'var(--to, purple)',
      },
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  )

  return (
    <div className='container_1'>
        hello
      <animated.div className='block_1' style={{ background }} >
      hello
      </animated.div>
    </div>
  )
}