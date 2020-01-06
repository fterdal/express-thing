import React, { useRef } from "react"
import { useSocket } from "use-socketio"

const Canvas = () => {
  console.log()
  const canvasRef = useRef(null)
  const drawSquare = (x, y) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    ctx.beginPath()
    ctx.rect(x, y, 20, 20)
    ctx.stroke()
  }
  useSocket("batch-draws", batchDraws => {
    batchDraws.forEach(draw => drawSquare(draw.x, draw.y))
  })
  const socket = useSocket("draw", newDraw => {
    drawSquare(newDraw.x, newDraw.y)
  })
  const handleCanvasClick = e => {
    const canvas = canvasRef.current
    const x = e.clientX + pageXOffset - canvas.offsetLeft - 10
    const y = e.clientY + pageYOffset - canvas.offsetTop - 10
    drawSquare(x, y)
    socket.emit("draw", { x, y })
  }
  return (
    <div className="canvas-container">
      <canvas
        className="draw-stuff"
        ref={canvasRef}
        width="300"
        height="300"
        onClick={handleCanvasClick}
      />
    </div>
  )
}

export default Canvas
