const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static(__dirname + 'dist'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.get('/index.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.js'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
