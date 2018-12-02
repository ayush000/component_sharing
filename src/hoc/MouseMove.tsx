import React from 'react'
import withMousePosition from './withMousePosition'
import s from '../constants/mouseMoveStyles'

interface props {
  x: number;
  y: number;
  handleMouseMove: ((e: React.MouseEvent) => void);
}

const MouseMove = (props: props) => (
  <div
    style={s.wrapper}
    onMouseMove={props.handleMouseMove}
  >
    Hey, the position is {props.x}, {props.y}
  </div>
)

export default withMousePosition(MouseMove)