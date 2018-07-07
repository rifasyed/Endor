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


module.exports = function() {
    
    function airPumpOff() {
        // var eFan = new five.Motor(10);
        // eFan.stop();

        var airPump = new five.Relay(7);
        airPump.off();
      }

      airPumpOff();

}