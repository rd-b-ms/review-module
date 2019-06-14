const newrelic = require('newrelic');
// const cluster = require('cluster');
// if (cluster.isMaster) {
//   var cpuCount = require('os').cpus().length;
//     for (var i = 0; i < cpuCount; i += 1) {
//         cluster.fork();
//     }
// } else {

  const express = require('express');
  const path = require('path');
  const bodyParser = require('body-parser');
  const db = require('../database/index.js');
  const PG = require('../database/indexPG.js');
  const cors = require('cors');
  
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  
  app.use(express.static(path.join(__dirname, '/../public')));
  const Port = 3001;
  
  app.get('/messages/:id', function getting(req, res) {
    req.params.id = req.params.id || 1;
    PG.getMessages(req.params.id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200);
        res.send(data);
      }
    });
  });
  
  app.post('/messages', function posting (req, res) {
    // console.log(req.body);
    PG.createMessage(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.status(201).json(result);
    });
  });
  
  app.put('/messages', (req, res) => {
    PG.updateMessage(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.status(202).json(result);
    });
  });
  
  app.delete('/messages', (req, res) => {
    PG.deleteMessage(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.status(200).json(result);
    });
  });
  
  app.get('/listings/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
  // app.get('/messages/:id', (req, res) => {
  //   console.log(req.params.id)
  //   req.params.id = req.params.id || 1;
  //   db.getMessages(req.params.id, (err, data) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     } else {
  //       res.status(200);
  //       res.send(data);
  //     }
  //   });
  // });
  
  // app.post('/messages', (req, res) => {
  //   db.createMessage(req.body, (err, result) => {
  //     if (err) {
  //       res.status(500).send(err);
  //       return;
  //     }
  //     res.status(201).json(result);
  //   });
  // });
  
  // app.put('/messages', (req, res) => {
  //   db.updateMessage(req.body, (err, result) => {
  //     if (err) {
  //       res.status(500).send(err);
  //       return;
  //     }
  //     res.status(202).json(result);
  //   });
  // });
  
  // app.delete('/messages', (req, res) => {
  //   db.deleteMessage(req.body, (err, result) => {
  //     if (err) {
  //       res.status(500).send(err);
  //       return;
  //     }
  //     res.status(200).json(result);
  //   });
  // });
  
  app.listen(Port, () => {
    console.log('Listening on port', Port);
  });
// }
