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
    function thermTwo() {
        // This requires OneWire support using the ConfigurableFirmata
        var thermometer = new five.Thermometer({
          controller: 'LM35',
          pin: "A2",
          freq: 5000
        });
      
        thermometer.on('data', function () {
          logStream2.write(new Date().toLocaleString() + ' - ' + this.fahrenheit + '°F\n');
          console.log(this.celsius + "°C", this.fahrenheit + "°F");
      
          fs.readFile('./log2.txt', 'utf-8', function (e, d) {
            if (e) throw e
            let dataArrUnstructured = []
            let dataArr = []
            let data = '' + d
            dataArrUnstructured = data.split('\n')
      
            for (let i = 0; i < dataArrUnstructured.length; i++) {
              let dateBenchmark = _.indexOf(dataArrUnstructured[i], ',')
              let timeBenchmark = _.indexOf(dataArrUnstructured[i], '-')
              let dataObject = {
                date: dataArrUnstructured[i].slice(0, dateBenchmark),
                time: dataArrUnstructured[i].slice(dateBenchmark + 2, timeBenchmark - 1),
                temperature: dataArrUnstructured[i].slice(timeBenchmark + 2, dataArrUnstructured[i].length)
              }
              dataArr.push(dataObject)
            }
            let temp = dataArr[dataArr.length - 2]
      
            Temp2.create({
              date: temp.date,
              time: temp.time,
              temperature: temp.temperature
            })
              .then((r) =>
                console.log(r)
              )
              .catch((e) => {
                console.log(e)
              })
          })
        });
      };
  thermTwo();
}