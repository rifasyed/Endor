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
    
    function eFanOn() {
        // var eFan = new five.Motor(12);
        // // Start the motor at maximum speed
        // eFan.start();
        // // Start the motor at set speed
        // // iFan.start(255)
        var eFan = new five.Relay(12);
        eFan.on();  
      }

      eFanOn();

}