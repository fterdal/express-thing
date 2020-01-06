import React, { useRef, useState, useEffect } from "react"
import { useSocket } from "use-socketio"

export class HelloRyanOLD extends React.Component {
  constructor() {
    super()
    this.state = {
      greeting: "Hello Ryan!"
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    console.log("runs once when it first mounts to the DOM")
  }
  handleChange(event) {
    this.setState({ greeting: event.target.value })
  }
  render() {
    console.log("runs all the time!")
    return (
      <>
        <div>{this.state.greeting}</div>
        <input
          type="text"
          value={this.state.greeting}
          onChange={this.handleChange}
        />
      </>
    )
  }
}

const useFetch = url => {
  const [data, setData] = useState(null)
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    ;(async () => {
      const response = await fetch(url)
      setData(response.data)
    })()
  }, [counter])
  const refetch = () => setCounter(c => c + 1)
  return [data, refetch]
}

export const HelloRyan = () => {
  const [data, refetch] = useFetch("http://google.com")
  const [greeting, setGreeting] = useState("Hello Ryan!")
  useEffect(() => {
    console.log("runs once when it first mounts to the DOM")
  }, [])
  console.log("runs all the time!")
  return (
    <>
      <div>{greeting}</div>
      <input
        type="text"
        value={greeting}
        onChange={evt => setGreeting(evt.target.value)}
      />
    </>
  )
}

const SVG = () => {
  return <div className="svg-container"></div>
}

export default SVG
