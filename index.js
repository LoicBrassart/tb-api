const express = require('express');
const cors = require('cors');
const { db } = require('./conf');

const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('/characters', async (req, res) => {
  const { needle } = req.query;
  let query = 'SELECT * FROM characters';

  if (needle) {
    query += ` WHERE name LIKE ?`;
  }

  const [rows] = await db.query(query, [`%${needle}%`]);

  const updatedRows = rows.map((row) => {
    const alteredName = row.name
      .toLowerCase()
      .replace(' ', '')
      .replace('^', '')
      .replace("'", '');
    const imgFolder = `/img/adventurers/${alteredName}`;
    return { ...row, imgFolder };
  });

  res.send(updatedRows);
});

app.use('/', (req, res) => {
  res.status(404).send('Route not found! ');
});

app.listen(5050, () => {
  console.log('Terra Battle API now available on http://localhost:5050 !');
});
