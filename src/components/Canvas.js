import React, { useRef } from "react"

const Canvas = () => {
  const canvasRef = useRef(null)
  const handleCanvasClick = e => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    console.log([canvas.offsetLeft, canvas.offsetTop])
    // console.log([pageXOffset, pageYOffset])
    ctx.beginPath()
    ctx.rect(
      e.clientX + pageXOffset - 40,
      e.clientY + pageYOffset - 40,
      20,
      20
    )
    // console.log(e.clientX - 10 + canvas.offsetLeft)
    // ctx.rect(
    //   e.clientX - (canvas.offsetLeft),
    //   e.clientY - (canvas.offsetRight),
    //   20,
    //   20
    // )
    ctx.stroke()
  }

  return (
    <canvas
      style={{margin: "30px"}}
      className="draw-stuff"
      ref={canvasRef}
      width="300"
      height="300"
      onClick={handleCanvasClick}
    />
  )
}

export default Canvas
