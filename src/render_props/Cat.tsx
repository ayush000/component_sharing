import React from 'react'
import MouseTracker from './MouseTracker'
import s from '../constants/catStyles'

interface MouseType {
  x: number;
  y: number;
}

type HandleMouseMoveType = (e: React.MouseEvent) => void

const Cat = () => (
  <MouseTracker>
    {(mouse: MouseType, handleMouseMove: HandleMouseMoveType) => (
      <div style={s.wrapper} onMouseMove={handleMouseMove}>
        <div style={s.getCatStyles(mouse.x, mouse.y)}>
          Cat cat..
        </div>
      </div>
    )}
  </MouseTracker>
)

export default Cat