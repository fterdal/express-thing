import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ClientSocket, useSocket } from 'use-socketio'

const App = () => {
  const [count, setCount] = useState(0)
  useSocket("counter", newCount => {
    setCount(newCount.count)
  })
  return (
    <div className="app">
      <h1>Hello World</h1>
      <h2>{count} people are online</h2>
    </div>
  )
}

ReactDOM.render(
  <ClientSocket url={window.location.origin}>
    <App />
  </ClientSocket>,
  document.getElementById('app')
)
