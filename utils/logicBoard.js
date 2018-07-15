/////////////////////////////////////////////////////////////
// Pin Requirements
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
// Initialization
/////////////////////////////////////////////////////////////
const five = require('johnny-five');
const fs = require('fs');
const _ = require('lodash')
const axios = require('axios')
const logStream = fs.createWriteStream('log.txt', { 'flags': 'a' });
const logStream2 = fs.createWriteStream('log2.txt', { 'flags': 'a' });
const board = new five.Board();
const mongoose = require("mongoose");
const Temp1 = require('../models/tempModel');
const Temp2 = require('../models/tempModel');
const moment = require('moment')

const lightOn = require('./lightOn')
const lightOff = require('./lightOff')
const fogOn = require('./fogOn')
const fogOff = require('./fogOff')
// const iFanOnFull = require('./iFanOn')
const iFanOff = require('./iFanOff')
// const eFanOn = require('./eFanOn')
const eFanOff = require('./eFanOff')
const pumpOn = require('./pumpOn')
const pumpOff = require('./pumpOff')
const thermOne = require('./thermOne')
const thermTwo = require('./thermTwo')
const fanController = require('./fanController')
const airPumpOn = require('./airPumpOn')
const airPumpOff = require('./airPumpOff')

/////////////////////////////////////////////////////////////
// Board On
/////////////////////////////////////////////////////////////
module.exports = function () {
  board.on("ready", function () {
    airPumpOn();
    lightOn();
    fogOn();
    pumpOn();
    thermOne();
    thermTwo();
    fanController();
  });
}

/////////////////////////////////////////////////////////////
// Board Close
/////////////////////////////////////////////////////////////
board.on('exit', function () {
  logStream.end('==================END OF SESSION=================\n');
  fogOff();
  iFanOff();
  eFanOff();
  lightOff();
  pumpOff();
  airPumpOff();
});




















