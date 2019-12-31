import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ClientSocket, useSocket } from 'use-socketio'

const App = () => {
  const [count, setCount] = useState(0)
  const [cookies, setCookies] = useState(0)
  const socket = useSocket("counter", newCount => {
    setCount(newCount.count)
    setCookies(newCount.cookies)

  })
  return (
    <div className="app">
      <h1>Hello World</h1>
      <h2>👩‍💻 {count} people are online</h2>
      <h2>🍪 {cookies} cookies</h2>
      <button onClick={() => {socket.emit('add-cookie')}}>Add Cookie</button>
      <button onClick={() => {socket.emit('subtract-cookie')}}>Subtract Cookie</button>
    </div>
  )
}

ReactDOM.render(
  <ClientSocket url={window.location.origin}>
    <App />
  </ClientSocket>,
  document.getElementById('app')
)
