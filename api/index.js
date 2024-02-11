// index.js
const express = require('express')
const bodyParser = require('body-parser');
const app = express()

const authRoutes = require('./routes/auth.route')
const deviceRoutes = require('./routes/devices.route')

const connectToDatabase = require('../api/config/db.config')

const port = 3001

app.get('/', (req, res) => {
  res.send('Hello, Express!')
})

app.use(bodyParser.json());

app.use('/api/auth', authRoutes)
app.use('/api/device', deviceRoutes)


app.listen(port, async () => {
  console.log(`Server is listening at http://localhost:${port}`)
  await connectToDatabase()
})
