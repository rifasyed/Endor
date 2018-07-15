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

var iFanOnFull = require('./iFanOnFull')
var iFanOff = require('./iFanOff')
var eFanOn = require('./eFanOn')
var eFanOff = require('./eFanOff')
// var eFanOnFull = require('./eFanOn')
// var eFanOnHalf = require('./eFanOnHalf')
// var eFanOff = require('./eFanOff')

module.exports = function() {
    
  
  function fanController() {
        // This requires OneWire support using the ConfigurableFirmata
        var thermometer = new five.Thermometer({
          controller: 'LM35',
          pin: "A2",
          freq: 15000
        });
      
        thermometer.on('data', function () {
        //   logStream.write(new Date().toLocaleString() + ' - ' + this.fahrenheit + '°F\n');
          console.log('Ocean Biome Working Temp One:' + this.celsius + "°C", this.fahrenheit + "°F" );
                if ( this.fahrenheit >= '80' ) {
                  console.log('FANS ACTIVATED 80+ Temp')
                  iFanOnFull();
                  eFanOn();
                } else if (this.fahrenheit >= '61' && this.fahrenheit <= '79') 
                console.log('FANS OFF Temp NORMAL')
                iFanOnFull();
                iFanOff() 
                eFanOff();
        });
  };

fanController()
}