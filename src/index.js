import React from "react"
import ReactDOM from "react-dom"
import { ClientSocket } from "use-socketio"
import Cookies from "./components/Cookies"
import Canvas from "./components/Canvas"
import { HelloRyan } from "./components/SVG"

const App = () => {
  return (
    <>
      {/* <HelloRyan /> */}
      <Canvas />
      <Cookies />
    </>
  )
}

ReactDOM.render(
  <ClientSocket url={window.location.origin}>
    <App />
  </ClientSocket>,
  document.getElementById("app")
)
