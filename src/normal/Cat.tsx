import React from 'react'
import s from '../constants/catStyles'

class Cat extends React.Component {
  state = {
    x: 0,
    y: 0
  }

  render() {
    return (
      <div style={s.wrapper} onMouseMove={this._handleMouseMove}>
        <div style={s.getCatStyles(this.state.x, this.state.y)}>
          Cat cat..
        </div>
      </div>
    )
  }

  _handleMouseMove = (e: React.MouseEvent) => {
    this.setState ({x: e.clientX, y: e.clientY})
  }
}

export default Cat