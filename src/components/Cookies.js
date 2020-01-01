import React, { useState } from "react"
import { useSocket } from "use-socketio"

const Cookies = () => {
  const [count, setCount] = useState(0)
  const [cookies, setCookies] = useState(0)
  const socket = useSocket("counter", newCount => {
    setCount(newCount.count)
    setCookies(newCount.cookies)
  })
  const handleAddCookie = () => socket.emit("add-cookie")
  const handleSubtractCookie = () => socket.emit("subtract-cookie")

  return (
    <div className="cookies">
      <h2>👩‍💻 {count} people are online</h2>
      <h2>🍪 {cookies} cookies</h2>
      <button onClick={handleAddCookie}>Add Cookie</button>
      <button onClick={handleSubtractCookie}>Subtract Cookie</button>
    </div>
  )
}

export default Cookies
