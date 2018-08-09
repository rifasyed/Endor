/////////////////////////////////////////////////////////////
// Pin Requirements
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
// Initialization
/////////////////////////////////////////////////////////////
var five = require('johnny-five');
var fs = require('fs');
var _ = require('lodash')
var axios = require('axios')
var mongoose = require("mongoose");
var Temp1 = require('../models/tempModel');
var Temp2 = require('../models/tempModel');
var moment = require('moment')
var board = new five.Board();
var logStream = fs.createWriteStream('log.txt', { 'flags': 'a' });
var logStream2 = fs.createWriteStream('log2.txt', { 'flags': 'a' });

var lightOn = require('./lightOn')
var lightOff = require('./lightOff')
var fogOn = require('./fogOn')
var fogOff = require('./fogOff')
var iFanOnFull = require('./iFanOnFull')
var iFanOff = require('./iFanOff')
var eFanOn = require('./eFanOn')
var eFanOff = require('./eFanOff')
var pumpOn = require('./pumpOn')
var pumpOff = require('./pumpOff')
var thermOne = require('./thermOne')
var thermTwo = require('./thermTwo')
var thermWater = require('./thermWater')
var fanController = require('./fanController')
var airPumpOn = require('./airPumpOn')
var airPumpOff = require('./airPumpOff')
var hygOne = require('./hygOne')

var Data3 = require('../models/waterModel');

module.exports = function () {

    function statusChecker() {
        Data3.findOne({}, {}, { sort: { 'created_at': -1 } }, function (error, Data3) {
            console.log(Data3 + "HOLY FUCKING SHIT FUCKING HELL"); //Display the comments returned by MongoDB, if any were found. Executes after the query is complete.
        });
    };
    statusChecker();
};

