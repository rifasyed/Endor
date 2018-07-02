const express = require('express');
const app = express();
const TempRouter = express.Router();

const Temp = require('../models/tempModel');

TempRouter.route('/route').post(function (req, res) {
  const tempPort = new Temp(req.body);
  tempPort.save()
    .then(tempPort => {
        res.json('Server added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

TempRouter.route('/').get(function (req, res) {
    Temp1.find(function (err, tempPorts){
    if(err){
      console.log(err);
    }
    else {
      res.json(tempPorts);
    }
  });
});

module.exports = TempRouter;