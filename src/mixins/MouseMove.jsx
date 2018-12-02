import React from 'react'
import createClass from 'create-react-class';
import mousePositionMixin from './mousePositionMixin'
import s from '../constants/mouseMoveStyles'

const ShowPosition = createClass({
  displayName: "ShowPosition",
  mixins: [mousePositionMixin],
  render() {
    return (
      <div style={s.wrapper} onMouseMove={this.handleMouseMove}>
        Hey, the position is {this.state.x}, {this.state.y}
      </div>
    )
  }
});

export default ShowPosition