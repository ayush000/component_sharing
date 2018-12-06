import React from 'react'
import MouseTracker from './MouseTracker'
import s from '../constants/mouseMoveStyles'

const MouseMove = () => (
  <MouseTracker>
    {(mouse, handleMouseMove) => (
      <div
        style={s.wrapper}
        onMouseMove={handleMouseMove}
      >
        Hey, the position is {mouse.x}, {mouse.y}
      </div>
    )}
  </MouseTracker>
)

export default MouseMove