import React from 'react'

function withPosition(Component: any) {
  return class WithPosition extends React.Component {
    state = {
      x: 0,
      y: 0
    }

    handleMouseMove = (e: React.MouseEvent) => {
      this.setState ({x: e.clientX, y: e.clientY})
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          handleMouseMove={this.handleMouseMove}
        />
      );
    }
  }
}

export default withPosition