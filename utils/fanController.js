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

var iFanOnFull = require('./iFanOnFull')
var iFanOff = require('./iFanOff')
var eFanOn = require('./eFanOn')
var eFanOff = require('./eFanOff')
// var eFanOnFull = require('./eFanOn')
// var eFanOnHalf = require('./eFanOnHalf')
// var eFanOff = require('./eFanOff')

module.exports = function () {

  function fanController() {
    // This requires OneWire support using the ConfigurableFirmata
    var bob1 = new five.Thermometer({
      controller: 'LM35',
      pin: "A2",
      freq: 5000
    });

    bob1.on('data', function () {
      //   logStream.write(new Date().toLocaleString() + ' - ' + this.fahrenheit + '°F\n');
      if (this.fahrenheit > '80') {
        console.log(this.fahrenheit + '  I&E FANS ON')
        // console.log('FANS ACTIVATED 80+ Temp')
        iFanOnFull();
        eFanOn();
      } else if (this.fahrenheit < '60') {
        console.log(this.fahrenheit + '  ALL FANS OFF')
        eFanOff();
        iFanOff();
      } else if ((this.fahrenheit > '61') && (this.fahrenheit < '79')) {
        console.log('temps stable')
      }
      else
        console.log('')
    })

  }
  fanController();
}