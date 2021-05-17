const express = require('express');
const cors = require('cors');
const { db } = require('./conf');

const app = express();
app.use(cors());

app.get('/characters', async (req, res) => {
  const { needle } = req.query;
  let query = 'SELECT * FROM characters';

  if (needle) {
    query += ` WHERE name LIKE ?`;
  }

  const [rows] = await db.query(query, [`%${needle}%`]);
  res.send(rows);
});

app.use('/', (req, res) => {
  res.status(404).send('Route not found! ');
});

app.listen(5050, () => {
  console.log('Terra Battle API now available on http://localhost:5050 !');
});
