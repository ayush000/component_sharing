import { useState } from "react";

function useMousePosition (initialMousePos) {
  const [mousePos, setMousePos] = useState (initialMousePos)

  function handleMouseMove (event) {
    setMousePos({x: event.clientX, y: event.clientY})
  }

  return [mousePos, handleMouseMove]
}

export default useMousePosition