var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var userSettings = new Schema({


    userID: {
        type: String,
    },

    tempOne: {
        type: Number,

    },
    tempTwo: {
        type: Number,

    },
    hygOne: {
        type: Number,
    },
    hygTwo: {
        type: Number,
    },

    intakeFanState: {
        type: Boolean,

    },

    exhaustFanState: {
        type: Boolean,

    },

    humFanState: {
        type: Boolean,

    },

    lightState: {
        type: Boolean,

    },

    maxHyg: {
        type: Number,

    },

    waterTemp: {
        type: Number,

    }

});

// This creates our model from the above schema, using mongoose's model method
var Settings = mongoose.model("userSettings", userSettings);

// Export the User model
module.exports = Settings;