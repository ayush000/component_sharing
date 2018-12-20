import React from 'react'
import useMousePosition from './useMousePosition'
import s from '../constants/catStyles'

function Cat () {
  const initialMousePosition = {x: 0, y: 0}
  const [mouse, handleMouseMove] = useMousePosition (initialMousePosition)

  return (
    <div style={s.wrapper} onMouseMove={handleMouseMove}>
      <div style={s.getCatStyles(mouse.x, mouse.y)}>
        Cat cat..
      </div>
    </div>
  )
}

export default Cat