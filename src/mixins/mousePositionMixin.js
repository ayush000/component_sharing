export default {
  getInitialState() {
    return {
      x: 0,
      y: 0
    }
  },
  handleMouseMove (e) {
    this.setState ({x: e.clientX, y: e.clientY})
  }
}