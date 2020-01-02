const express = require('express')
const Bundler = require('parcel-bundler')
const path = require('path')
const socketIO = require('socket.io')

const app = express()

const entry = path.join(__dirname, 'src', 'index.html')
const bundler = new Bundler(entry)
app.use(bundler.middleware())

const PORT = 7070
const server = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

const io = socketIO(server)

const counter = {
  count: 0,
  cookies: 0
}

// Super Helpful: https://stackoverflow.com/questions/32674391/io-emit-vs-socket-emit
io.on('connection', (socket) => {
  counter.count++
  io.emit('counter', counter)
  socket.on('disconnect', () => {
    counter.count--
    io.emit('counter', counter)
  })
  socket.on('add-cookie', () => {
    counter.cookies++
    io.emit('counter', counter)
  })
  socket.on('subtract-cookie', () => {
    counter.cookies--
    io.emit('counter', counter)
  })
  // TODO: Store draw events in a data structure. When new client connects,
  // draw all existing squares.
  socket.on('draw', drawEvent => {
    socket.broadcast.emit('draw', drawEvent)
  })
})
