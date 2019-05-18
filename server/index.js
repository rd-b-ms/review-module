const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../public')));
const Port = 3001;

app.get('/messages', (req, res) => {
  db.getMessages((err, data) => {
    if (err) {
      res.status(500);
      console.log(err);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

app.listen(Port, () => {
  console.log('Listening on port', Port);
});
