/////////////////////////////////////////////////////////////
// Pin Requirements
/////////////////////////////////////////////////////////////
// Pin 3 - pwm - Fan Exhaust

/////////////////////////////////////////////////////////////
// Initialization
/////////////////////////////////////////////////////////////
var five = require('johnny-five');
var fs = require('fs');
var _ = require('lodash')
var axios = require('axios')
var logStream = fs.createWriteStream('log.txt', { 'flags': 'a' });
var board = new five.Board();
var mongoose = require("mongoose");
var Temp1 = require('./dataModel');
var moment = require('moment')
/////////////////////////////////////////////////////////////
// Board On
/////////////////////////////////////////////////////////////
module.exports = function () {


board.on("ready", function() {
iFanOn();
eFanOn();
therm1();


  var relay = new five.Relay(3);

  // Control the relay in real time
  // from the REPL by typing commands, eg.
  //\
  relay.on();

  

});
}
// /////////////////////////////////////////////////////////////
// Fan Controller {intake}
// ////////////////////////////////////////////////////////////
function iFanOn(){
  var iFan = new five.Motor(11);
  // Start the motor at maximum speed
  iFan.start();
  // Start the motor at set speed
  // iFan.start(255)
}
function iFanOff(){
  var iFan = new five.Motor(11);
  iFan.stop();
}
// /////////////////////////////////////////////////////////////
// Fan Controller {exhaust}
// ////////////////////////////////////////////////////////////
function eFanOn(){
  var eFan = new five.Motor(10);
  // Start the motor at maximum speed
  eFan.start();
  // Start the motor at set speed
  // iFan.start(255)
}
function  eFanOff(){
  var eFan = new five.Motor(10);
  eFan.stop();
}
////////////////////////////////////////////////////////////////
// Temp and Data Logger  {therm1}
////////////////////////////////////////////////////////////////
function therm1 (){
  // This requires OneWire support using the ConfigurableFirmata
  var thermometer = new five.Thermometer({
    controller: 'LM35',
    pin: "A2",
    freq: 5000
  });

  thermometer.on('data', function () {
    logStream.write(new Date().toLocaleString() + ' - ' + this.fahrenheit + '°F\n');
    console.log(this.celsius + "°C", this.fahrenheit + "°F");

    fs.readFile('./log.txt', 'utf-8', function (e, d) {
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
          temperature: dataArrUnstructured[i].slice(timeBenchmark + 3, dataArrUnstructured[i].length)
        }
        dataArr.push(dataObject)
      }
      let temp = dataArr[dataArr.length - 2]
      // Temp1.create( "data", { capped: true, size: 100000 } )
      Temp1.create({
        date: temp.date,
        time: temp.time,
        temperature: temp.temperature})
      .then((r) => 
    console.log(r)
    )
    .catch((e) => {
      console.log(e)
    })

  //  Data.runCommand({"convertToCapped": "datas", size: 50000});

      // console.log(dataArr[dataArr.length - 2])

     ///////////////////////////////////////////////////
      // var tempLogArray = dataArr[dataArr.length - 2];
      // var tempArray = [];
      // tempArray.push(tempLogArray);
      // for (var tempData in tempArray) {
      //   new TempGoose(tempData[tempArray])
      //     .save()
      //     .catch((err) => {
      //       console.log(err.message);
      //     });
      // }
    })
  });
};

/////////////////////////////////////////////////////////////
// Board Close
/////////////////////////////////////////////////////////////
board.on('exit', function () {
  logStream.end('==================END OF SESSION=================\n');
iFanOff();
eFanOff();
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


