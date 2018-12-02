import React from 'react'
import s from '../constants/mouseMoveStyles'

class MouseMove extends React.Component {
  state = {
    x: 0,
    y: 0
  }

  render() {
    return (
      <div
        style={s.wrapper}
        onMouseMove={this._handleMouseMove}
      >
        Hey, the position is {this.state.x}, {this.state.y}
      </div>
    )
  }

  _handleMouseMove = (e: React.MouseEvent) => {
    this.setState ({x: e.clientX, y: e.clientY})
  }
}

export default MouseMove