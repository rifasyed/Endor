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
var statusChecker = require('./statusChecker')
var fogController = require('./fogController')


/////////////////////////////////////////////////////////////
// Board On
/////////////////////////////////////////////////////////////
module.exports = function () {


  board.on("ready", function () {
    // airPumpOn();
    lightOn();
    pumpOn();
    // fogOn();
    // thermWater();
    // iFanOnFull();
    // eFanOn();
    // statusChecker();
    fanController();
    fogController();
    thermOne();
    thermTwo();
    hygOne();
  });
}
////////////////////////////////////////////////////////////////
//  Checker  {checker}
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Main Light  {light1}
////////////////////////////////////////////////////////////////
// function lightOn() {
//   var led = new five.Led(13);
//   led.on()
// };
// function lightOff() {
//   var led = new five.Led(13);
//   led.off()
// };
////////////////////////////////////////////////////////////////
// Fog  {Fogger}
////////////////////////////////////////////////////////////////
// function fogOn() {
//   var relayFog = new five.Relay(8);
//   relayFog.on();
// }
// function fogOff() {
//   var relayFog2 = new five.Relay(8);
//   relayFog2.off();
// }
////////////////////////////////////////////////////////////////
// Pump  {WaterPump}
////////////////////////////////////////////////////////////////
// function pumpOn() {
//   var relayPump = new five.Relay(2);
//   relayPump.on();
// }
// function pumpOff() {
//   var relayPump2 = new five.Relay(2);
//   relayPump2.off();
// }
// /////////////////////////////////////////////////////////////
// Fan Controller {intake}
// ////////////////////////////////////////////////////////////
// function iFanOn() {
//   var iFan = new five.Motor(11);
//   // Start the motor at maximum speed
//   iFan.start();
//   // Start the motor at set speed
//   // iFan.start(255)
//   var relayIn1 = new five.Relay(3);
//   relayIn1.on();
// }
// function iFanOff() {
//   var iFan = new five.Motor(11);
//   iFan.stop();

//   var relayIn2 = new five.Relay(3);
//   relayIn2.off();
// }
// /////////////////////////////////////////////////////////////
// Fan Controller {exhaust}
// ////////////////////////////////////////////////////////////
// function eFanOn() {
//   var eFan = new five.Motor(10);
//   // Start the motor at maximum speed
//   eFan.start();
//   // Start the motor at set speed
//   // iFan.start(255)
// }
// function eFanOff() {
//   var eFan = new five.Motor(10);
//   eFan.stop();
// }
////////////////////////////////////////////////////////////////
// Temp and Data Logger  {therm1}
////////////////////////////////////////////////////////////////
// function thermOne() {
//   // This requires OneWire support using the ConfigurableFirmata
//   var thermometer = new five.Thermometer({
//     controller: 'LM35',
//     pin: "A2",
//     freq: 5000
//   });

//   thermometer.on('data', function () {
//     logStream.write(new Date().toLocaleString() + ' - ' + this.fahrenheit + '°F\n');
//     console.log(this.celsius + "°C", this.fahrenheit + "°F");

//     // fs.readFile('/Users/nicktarnofsky2018/Desktop/nodebot/log.txt', 'utf-8', function (e, d) {

//     fs.readFile('./log.txt', 'utf-8', function (e, d) {
//       if (e) throw e
//       let dataArrUnstructured = []
//       let dataArr = []
//       let data = '' + d
//       dataArrUnstructured = data.split('\n')

//       for (let i = 0; i < dataArrUnstructured.length; i++) {
//         let dateBenchmark = _.indexOf(dataArrUnstructured[i], ',')
//         let timeBenchmark = _.indexOf(dataArrUnstructured[i], '-')
//         let dataObject = {
//           date: dataArrUnstructured[i].slice(0, dateBenchmark),
//           time: dataArrUnstructured[i].slice(dateBenchmark + 2, timeBenchmark - 1),
//           temperature: dataArrUnstructured[i].slice(timeBenchmark + 2, dataArrUnstructured[i].length)
//         }
//         dataArr.push(dataObject)
//       }
//       let temp = dataArr[dataArr.length - 2]

//       Temp1.create({
//         date: temp.date,
//         time: temp.time,
//         temperature: temp.temperature
//       })
//         .then((r) =>
//           console.log(r)
//         )
//         .catch((e) => {
//           console.log(e)
//         })
//     })
//   });
// };
////////////////////////////////////////////////////////////////
// Temp and Data Logger  {therm2}
////////////////////////////////////////////////////////////////
// function thermTwo() {
//   // This requires OneWire support using the ConfigurableFirmata
//   var thermometer = new five.Thermometer({
//     controller: 'LM35',
//     pin: "A5",
//     freq: 5000
//   });

//   thermometer.on('data', function () {
//     logStream2.write(new Date().toLocaleString() + ' - ' + this.fahrenheit + '°F\n');
//     console.log(this.celsius + "°C", this.fahrenheit + "°F");

//     fs.readFile('/Users/nicktarnofsky2018/Desktop/nodebot/log2.txt', 'utf-8', function (e, d) {
//       if (e) throw e
//       let dataArrUnstructured = []
//       let dataArr = []
//       let data = '' + d
//       dataArrUnstructured = data.split('\n')

//       for (let i = 0; i < dataArrUnstructured.length; i++) {
//         let dateBenchmark = _.indexOf(dataArrUnstructured[i], ',')
//         let timeBenchmark = _.indexOf(dataArrUnstructured[i], '-')
//         let dataObject = {
//           date: dataArrUnstructured[i].slice(0, dateBenchmark),
//           time: dataArrUnstructured[i].slice(dateBenchmark + 2, timeBenchmark - 1),
//           temperature: dataArrUnstructured[i].slice(timeBenchmark + 2, dataArrUnstructured[i].length)
//         }
//         dataArr.push(dataObject)
//       }
//       let temp = dataArr[dataArr.length - 2]

//       Temp2.create({
//         date: temp.date,
//         time: temp.time,
//         temperature: temp.temperature
//       })
//         .then((r) =>
//           console.log(r)
//         )
//         .catch((e) => {
//           console.log(e)
//         })
//     })
//   });
// };
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





















// fs.readFile('/Users/nicktarnofsky2018/Desktop/nodebot/log.txt', 'utf-8',function(e, d) {
//   if (e) throw e
//   let dataArrUnstructured = []
//   let dataArr = []
//   let data = '' + d
//   dataArrUnstructured = data.split('\n')

//   for(let i = 0; i < dataArrUnstructured.length; i++) {
//       let dateBenchmark = _.indexOf(dataArrUnstructured[i], ',')
//       let timeBenchmark = _.indexOf(dataArrUnstructured[i], '-')
//       let dataObject = {
//         date: dataArrUnstructured[i].slice(0, dateBenchmark),
//         time: dataArrUnstructured[i].slice(dateBenchmark + 2, timeBenchmark - 1),
//         temperature: dataArrUnstructured[i].slice(timeBenchmark + 2, dataArrUnstructured[i].length)
//       }
//       dataArr.push(dataObject)
//   }
//   console.log(dataArr)
// })


