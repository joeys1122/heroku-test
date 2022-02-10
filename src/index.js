const express = require('express');

require('dotenv').config();

const server = express();

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  console.log(process.env.MESSAGE);
});

server.use('*', (req, res) => {
  res.send('<h1>Hello heroku</h1>');
})