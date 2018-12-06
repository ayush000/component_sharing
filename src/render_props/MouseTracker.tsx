import React, { ReactNode } from 'react';

type handleMouseMoveType = (e: React.MouseEvent) => void;

interface State {
  x: number;
  y: number
}

type Props = {
  children: (state: State, handleMouseMove: handleMouseMoveType) => ReactNode
};

class MouseTracker extends React.Component<Props, State> {
  state = {
    x: 0,
    y: 0
  }

  handleMouseMove = (e: React.MouseEvent) => {
    this.setState ({x: e.clientX, y: e.clientY})
  }

  render() {
    return this.props.children(this.state, this.handleMouseMove);
  }
}

export default MouseTracker;