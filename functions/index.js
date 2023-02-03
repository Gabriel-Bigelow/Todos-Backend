const express = require('express');
const serverless = require('serverless-http');
require('dotenv').config();
const todoRoutes = require('./routes/todo');
const cors = require('cors');

// Running express server
const app = express();
const port = process.env.PORT || 8000;

// route middlewares
app.use('/api', cors(), todoRoutes);
app.use(cors());

app.get('/test', (req, res) => {
  res.status(200).send('This is working at /test');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports.handler = serverless(app);
