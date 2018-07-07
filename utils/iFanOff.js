var _ = require('lodash')
var axios = require('axios')
var five = require('johnny-five');
var fs = require('fs');
var mongoose = require("mongoose");
var moment = require('moment');
var board = new five.Board();
var logStream = fs.createWriteStream('../log.txt', { 'flags': 'a' });
var logStream2 = fs.createWriteStream('../log2.txt', { 'flags': 'a' });
var Temp1 = require('../models/tempModel');
var Temp2 = require('../models/tempModel');

// var iFanOff = require('iFanOff')


module.exports = function () {
    function iFanOff() {
        // var iFan = new five.Motor(11);
        // iFan.stop();
      
        var relayIn2 = new five.Relay(8);
        relayIn2.off();
      }

      iFanOff();
}