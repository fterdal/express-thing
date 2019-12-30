const express = require('express')
const html = require('html-template-tag')

const app = express()

app.get('/', (req, res, next) => {
  res.send(html`
  <style>
    div {
      display: flex;
      justify-content: center;
    }
  </style>
    <div>
      <h1>Hello World</h1>
    </div>
  `)
})

const PORT = 7070
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
