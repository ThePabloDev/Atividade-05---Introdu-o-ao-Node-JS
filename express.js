const express = require('express');
const app = express();
const port = 8000;
const fs = require('fs');

app.get('/', (req, res) => {
  fs.readFile('home.html', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erro ao ler o arquivo.');
      return;
    }
    res.send(data);
  });
});

app.get('/api/data', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erro ao ler o arquivo.');
      return;
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
