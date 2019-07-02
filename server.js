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
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', `http://localhost:${process.env.PORT}`);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(process.env.PORT, () => {
  console.log('Listening on port 8080')
})