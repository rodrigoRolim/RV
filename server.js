const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors'
)
app.set("/", "html")
app.use(cors())
app.use(express.static(path.join(__dirname, "/")))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(8080, () => {
  console.log('Listening on port 8080')
})