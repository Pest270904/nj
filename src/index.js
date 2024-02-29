const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/test', (req, res) => {
  res.send("Hello world")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})