import React, { useRef } from "react"

const Canvas = () => {
  const canvasRef = useRef(null)
  // const socket = useSocket("draw", newDraw => {
  //   // TODO: Draw on canvas whenever a "draw" event is received
  // })
  const handleCanvasClick = e => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    ctx.beginPath()
    ctx.rect(
      e.clientX + pageXOffset - canvas.offsetLeft - 10,
      e.clientY + pageYOffset - canvas.offsetTop - 10,
      20,
      20
    )
    ctx.stroke()
    // TODO: Emit a "draw" event
  }

  return (
    <canvas
      style={{ margin: "30px" }}
      className="draw-stuff"
      ref={canvasRef}
      width="300"
      height="300"
      onClick={handleCanvasClick}
    />
  )
}

export default Canvas
