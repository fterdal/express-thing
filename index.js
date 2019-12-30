const express = require('express')
const html = require('html-template-tag')
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
  count: 0
}

io.on('connection', (socket) => {
  counter.count++
  console.log('a client connected, counter: ', counter.count)
  socket.emit('counter', counter)
  socket.on('disconnect', () => {
    counter.count--
  })
})
