import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <h2>This is React!</h2>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

