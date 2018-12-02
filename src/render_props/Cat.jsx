import React from 'react'
import MouseTracker from './MouseTracker'
import s from '../constants/catStyles'

const Cat = () => (
  <MouseTracker>
    {(mouse, handleMouseMove) => (
      <div style={s.wrapper} onMouseMove={handleMouseMove}>
        <div style={s.getCatStyles(mouse.x, mouse.y)}>
          Cat cat..
        </div>
      </div>
    )}
  </MouseTracker>
)

export default Cat