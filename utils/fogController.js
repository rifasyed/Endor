
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
var five = require('johnny-five');
var fs = require('fs');
var _ = require('lodash')
var axios = require('axios')
var logStream = fs.createWriteStream('log.txt', { 'flags': 'a' });
// var logStream2 = fs.createWriteStream('log2.txt', { 'flags': 'a' });
var board = new five.Board();
var mongoose = require("mongoose");
var Hyg1 = require('../models/hygModel');
var moment = require('moment')
var logStream4 = fs.createWriteStream('log4.txt', { 'flags': 'a' });
var fogOn = require('./fogOn')
var fogOff = require('./fogOff')


module.exports = function () {

    function fogController() {
        // This requires OneWire support using the ConfigurableFirmata
        var hygrometer = new five.Hygrometer({
            controller: "HTU21D",
            freq: 5000
        });

        hygrometer.on('data', function () {
            if (this.relativeHumidity <= '50') {
                console.log("FOG ON")
                fogOn();
            } else if (this.relativeHumidity >= '65') {
                console.log("FOG OFF")
                fogOff();
            } else if (this.relativeHumidity > '51' && this.relativeHumidity < '64') {
                console.log("HUMIDITY STABLE /FOG HOLDING")
                fogOff();
            } else
                console.log('')
        })
    };
    fogController();
}