const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
app.set("/", "html")
app.use(cors())
app.use(express.static(path.join(__dirname, "/")))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', `http://localhost:${process.env.PORT}`);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(process.env.PORT, () => {
  console.log('Listening on port')
})