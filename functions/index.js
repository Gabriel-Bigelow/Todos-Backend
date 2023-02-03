const express = require('express');
const serverless = require('serverless-http');
require('dotenv').config();
const todoRoutes = require('./routes/todo');

// Running express server
const app = express();
const port = process.env.PORT || 8000;

// route middlewares
app.use('/api', todoRoutes);


//netlify test route
app.get('/', (res) => {
  res.send('This is working at the root');
})

app.get('/test', (res) => {
  res.status(200).send('This is working at /test');
});

app.get('/test2', (res) => {
  res.status
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});

module.exports.handler = serverless(app);
