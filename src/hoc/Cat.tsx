import React from 'react'
import withMousePosition from './withMousePosition'
import s from '../constants/catStyles'

interface props {
  x: number;
  y: number;
  handleMouseMove: ((e: React.MouseEvent) => void);
}

const Cat = (props: props) => (
  <div style={s.wrapper} onMouseMove={props.handleMouseMove}>
    <div style={s.getCatStyles(props.x, props.y)}>
      Cat cat..
    </div>
  </div>
)

export default withMousePosition(Cat)