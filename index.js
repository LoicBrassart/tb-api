const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.status(404).send('Coming soonish!');
});

app.listen(5050, () => {
  console.log('Terra Battle API now available on http://localhost:5050 !');
});
