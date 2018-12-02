import React from 'react'
import createClass from 'create-react-class';
import mousePositionMixin from './mousePositionMixin'
import s from '../constants/catStyles'

const Cat = createClass({
  displayName: "Cat",
  mixins: [mousePositionMixin],
  render() {
    return (
      <div style={s.wrapper} onMouseMove={this.handleMouseMove}>
        <div style={s.getCatStyles(this.state.x, this.state.y)}>
          Cat cat..
        </div>
      </div>
    )
  }
})

export default Cat