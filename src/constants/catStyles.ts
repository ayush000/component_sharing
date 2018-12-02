export default {
  wrapper: {
    position: 'relative' as 'relative',
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  getCatStyles (x: number, y: number) {
    return {
      position: 'absolute' as 'absolute',
      left: x,
      top: y
    }
  }
}