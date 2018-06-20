var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userData = new Schema({

    projectName: {
        type: String,
    },
    plantType: {
        type: String,
    },
    lightCycleOn: {
        type: Boolean,
    },
    lightCycleOff: {
        type: Boolean,
    },
    vegetativeLength: {
        type: Number,
    },
    maxTemp: {
        type: Number,
    },
    maxTemp: {
        type: Number,
    },
    minTemp: {
        type: Number,
    },
    maxHyg: {
        type: Number,
    },
    minHyg: {
        type: Number,
    }
});


var Data = mongoose.model("userData", userData);


module.exports = Data;
