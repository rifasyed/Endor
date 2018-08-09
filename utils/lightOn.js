
var five = require('johnny-five');
var fs = require('fs');
var _ = require('lodash')
var axios = require('axios')
var logStream = fs.createWriteStream('log.txt', { 'flags': 'a' });
var logStream2 = fs.createWriteStream('log2.txt', { 'flags': 'a' });
var board = new five.Board();
var mongoose = require("mongoose");
var Temp1 = require('../models/tempModel');
var Temp2 = require('../models/tempModel');
var moment = require('moment')

module.exports = function () {

  function lightOn() {
    var led = new five.Led(3);
    led.on()
  };

  lightOn();

}