var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var DataSchema = new Schema({
  
  date:  String,
  time: String,
  humidity: String,
 
});

var Data3 = mongoose.model("Data3", DataSchema);


module.exports = Data3 ;
