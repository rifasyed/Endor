var five = require('johnny-five');
var fs = require('fs');
var _ = require('lodash')
var axios = require('axios')
var logStream = fs.createWriteStream('log.txt', { 'flags': 'a' });
// var logStream2 = fs.createWriteStream('log2.txt', { 'flags': 'a' });
var board = new five.Board();
var mongoose = require("mongoose");
var Hyg1 = require('./hygModel');
var moment = require('moment')

module.exports = function(){
function hygOne() {
    // This requires OneWire support using the ConfigurableFirmata
    var hygrometer = new five.Hygrometer({
      controller: "HTU21D",
      freq: 5000 
    });
  
    hygrometer.on("data", function() {
    console.log('OMFG THISSSSSSS' + this.relativeHumidity + " %");
  });
};
hygOne();
};


var five = require('johnny-five');
var fs = require('fs');
var _ = require('lodash')
var axios = require('axios')
var logStream4 = fs.createWriteStream('log4.txt', { 'flags': 'a' });
// var logStream2 = fs.createWriteStream('log2.txt', { 'flags': 'a' });
var board = new five.Board();
var mongoose = require("mongoose");
var Hyg1 = require('./hygModel');
var moment = require('moment')

module.exports = function(){
function hygOne() {
    // This requires OneWire support using the ConfigurableFirmata
    var hygrometer = new five.Hygrometer({
      controller:  "HTU21D",
      freq: 5000
    });
  
    hygrometer.on('data', function () {
      logStream4.write(new Date().toLocaleString() + ' - ' + this.relativeHumidity + " %\n");
      console.log('The Humidity is =' + this.relativeHumidity + " %");
      
      // fs.readFile('/Users/nicktarnofsky2018/Desktop/nodebot/log.txt', 'utf-8', function (e, d) {
  
      fs.readFile('./log4.txt', 'utf-8', function (e, d) {
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
            humidity: dataArrUnstructured[i].slice(timeBenchmark + 2, dataArrUnstructured[i].length)
          }
          dataArr.push(dataObject)
        }
        let hyg = dataArr[dataArr.length - 2]
  
        Hyg1.create({
          date: hyg.date,
          time: hyg.time,
          humidity: hyg.humidity
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
  hygOne();
}