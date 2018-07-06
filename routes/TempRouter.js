const express = require('express');
const app = express();
const Temp = require('../models/tempModel');

module.exports= function (app) {

  app.route('/route').post(function (req, res) {
    const tempPort = new Temp(req.body);
    tempPort.save()
    .then(tempPort => {
      res.json('Server added successfully');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  });
  
  app.route('/data').get(function (req, res) {
    Temp.find({}, function (err, tempPorts){
      if(err){
        console.log(err);
      }
      else {
        res.json(tempPorts);
      }
    });
  });
  
}