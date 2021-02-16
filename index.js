const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({
    msg: "hello"
  })
})

app.get('/bye', (req, res) => {
  res.send({
    msg: "bye"
  })
})

app.listen(5000)

console.log("listening")