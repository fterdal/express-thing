import React, { useState, useRef } from "react"
import ReactDOM from "react-dom"
import { ClientSocket, useSocket } from "use-socketio"

const App = () => {
  const [count, setCount] = useState(0)
  const [cookies, setCookies] = useState(0)
  const socket = useSocket("counter", newCount => {
    setCount(newCount.count)
    setCookies(newCount.cookies)
  })

  const canvasRef = useRef(null)
  const handleClick = e => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    ctx.beginPath()
    ctx.rect(e.clientX - 10, e.clientY - 10, 20, 20)
    ctx.stroke()
    console.log(ctx)
  }

  return (
    <>
      <canvas
        className="draw-stuff"
        ref={canvasRef}
        width="300"
        height="300"
        onClick={handleClick}
      />
      <div className="app">
        <h2>👩‍💻 {count} people are online</h2>
        <h2>🍪 {cookies} cookies</h2>
        <button
          onClick={() => {
            socket.emit("add-cookie")
          }}
        >
          Add Cookie
        </button>
        <button
          onClick={() => {
            socket.emit("subtract-cookie")
          }}
        >
          Subtract Cookie
        </button>
      </div>
    </>
  )
}

ReactDOM.render(
  <ClientSocket url={window.location.origin}>
    <App />
  </ClientSocket>,
  document.getElementById("app")
)
