import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import io from 'socket.io-client'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
  // console.log(socket)
})
socket.on('counter', (data) => {
  console.log('received counter', data)
})

const App = () => {
  const [count, setCount] = useState(0)
  const receiveCounter = () => {
    socket.on('counter', (data) => {
      setCount(data.count)
    })
  }
  useEffect(() => {
    receiveCounter()
  }, [count])
  return (
    <div className="app">
      <h1>Hello World</h1>
      <h2>{count} people are online</h2>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
