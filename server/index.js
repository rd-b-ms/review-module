const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../public')));
const Port = 3001;

app.get('/messages/:id', (req, res) => {
  console.log(req.params.id)
  req.params.id = req.params.id || 1;
  db.getMessages(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

app.post('/messages', (req, res) => {
  db.createMessage(req.body, (err, result) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(result);
  });
});

app.put('/messages', (req, res) => {
  db.updateMessage(req.body, (err, result) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(result);
  });
});

app.delete('/messages', (req, res) => {
  db.deleteMessage(req.body, (err, result) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(result);
  });
});

app.listen(Port, () => {
  console.log('Listening on port', Port);
});
