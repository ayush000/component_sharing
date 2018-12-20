import React from 'react'
import useMousePosition from './useMousePosition'
import s from '../constants/mouseMoveStyles'

function MouseMove () {
  const initialMousePosition = {x: 0, y: 0}
  const [mouse, handleMouseMove] = useMousePosition (initialMousePosition)

  return (
    <div
        style={s.wrapper}
        onMouseMove={handleMouseMove}
      >
        Hey, the position is {mouse.x}, {mouse.y}
      </div>
  )
}

export default MouseMove