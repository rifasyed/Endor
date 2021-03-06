var five = require('johnny-five');
var fs = require('fs');
var _ = require('lodash')
var axios = require('axios')
var logStream = fs.createWriteStream('log3.txt', { 'flags': 'a' });
// var logStream2 = fs.createWriteStream('log2.txt', { 'flags': 'a' });
var board = new five.Board();
var mongoose = require("mongoose");
// var Temp1 = require('../models/tempModel');
var moment = require('moment')
var Temp3 = require('../models/waterModel')

module.exports = function () {
  function thermWater() {
    // This requires OneWire support using the ConfigurableFirmata
    var thermometer = new five.Thermometer({
      controller: 'LM35',
      pin: "A3",
      freq: 5000
    });

    thermometer.on('data', function () {
      logStream.write(new Date().toLocaleString() + ' - ' + this.fahrenheit + '°F\n');
      console.log('Water Temps = ' + this.fahrenheit + "°F");

      // fs.readFile('/Users/nicktarnofsky2018/Desktop/nodebot/log.txt', 'utf-8', function (e, d) {

      fs.readFile('./log3.txt', 'utf-8', function (e, d) {
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

        Temp3.create({
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
  thermWater();
}