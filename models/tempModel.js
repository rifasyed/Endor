var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var DataSchema = new Schema({
  
  date:  String,
  time: String,
  temperature: String,
 
});



var Data = mongoose.model("Data", DataSchema);


module.exports = Data ;
