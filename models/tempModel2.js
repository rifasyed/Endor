var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var DataSchema = new Schema({
  
  date:  String,
  time: String,
  temperature: String,
 
});

var Data2 = mongoose.model("Data2", DataSchema);


module.exports = Data2 ;
