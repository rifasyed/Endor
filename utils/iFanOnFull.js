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


module.exports = function(){

    function iFanOnFull() {
    // var iFan = new five.Motor(11);
    // // Start the motor at maximum speed
    // iFan.start();
    // Start the motor at set speed
    // iFan.start(255)
    var relayIn1 = new five.Relay(8);
    relayIn1.on();    
  }
  iFanOnFull(); 
}