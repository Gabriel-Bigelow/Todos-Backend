const express = require('express');
require('dotenv').config();
const todoRoutes = require('./routes/todo');

// Running express server
const app = express();
const port = process.env.PORT || 8000;

// route middlewares
app.use('/api', todoRoutes);


//netlify test route
app.get('/', (res) => {
  res.status(200).send('This is working at the root');
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
