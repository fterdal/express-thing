const express = require('express')
const html = require('html-template-tag')
const Bundler = require('parcel-bundler')
const path = require('path')

const app = express()

// app.get('/', (req, res, next) => {
//   res.send(html`
//   <style>
//     div {
//       display: flex;
//       justify-content: center;
//     }
//   </style>
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   `)
// })

const entry = path.join(__dirname, 'src', 'index.html')
const bundler = new Bundler(entry)
app.use(bundler.middleware())

const PORT = 7070
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
