var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var DataSchema = new Schema({

  date: String,
  time: String,
  humidity: String,

});

var Data4 = mongoose.model("Data4", DataSchema);


module.exports = Data4;
