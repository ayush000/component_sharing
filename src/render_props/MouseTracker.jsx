import React from 'react';

class MouseTracker extends React.Component {
  state = {
    x: 0,
    y: 0
  }

  handleMouseMove = (e) => {
    this.setState ({x: e.clientX, y: e.clientY})
  }

  render() {
    return this.props.children(this.state, this.handleMouseMove);
  }
}

export default MouseTracker;