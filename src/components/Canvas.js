import React, { useRef } from "react"

const Canvas = () => {
  const canvasRef = useRef(null)
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
