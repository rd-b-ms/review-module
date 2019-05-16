const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../public')));
const Port = 3001;

app.listen(Port, () => {
  console.log('Listening on port', Port);
});
