const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();

const authRoutes = require('./routes/auth.route');
const deviceRoutes = require('./routes/devices.route');

const connectToDatabase = require('../api/config/db.config');

const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

app.use('/api/v1/auth', authRoutes);
app.use('/api/device', deviceRoutes);

app.listen(port, async () => {
  console.log(`Server is listening at http://localhost:${port}`);
  await connectToDatabase();
});
