var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var userData = new Schema({
    // `projectname` must be of type String
    // `projectname` will trim leading and trailing whitespace before it's saved

    projectName: {
        type: String,
    },
    // `plantType` must be of type String
    // `plantType` will trim leading and trailing whitespace before it's saved
    // `plantType` uses a custom validation function to only accept values 6 characters or more
    plantType: {
        type: String,
        // required: "plantType is Required",
        // validate: [
        //     function (input) {
        //         return input.length >= 6;
        //     },
        //     "plantType should be longer."
        // ]
    },
    // `email` must be of type String
    // `email` must be unique
    // `email` must match the regex pattern below and throws a custom error message if it does not
    // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
    lightCycleOn: {
        type: Boolean,
    },
    // `email` must be of type String
    // `email` must be unique
    // `email` must match the regex pattern below and throws a custom error message if it does not
    // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
    lightCycleOff: {
        type: Boolean,
    },
    // `date` must be of type Date. The default value is the current date
    vegetativeLength: {
        type: Number,

    },
    // `date` must be of type Date. The default value is the current date
    maxTemp: {
        type: Number,

    },
    // `date` must be of type Date. The default value is the current date
    maxTemp: {
        type: Number,


    },
    // `date` must be of type Date. The default value is the current date
    minTemp: {
        type: Number,


    },
    // `date` must be of type Date. The default value is the current date
    maxHyg: {
        type: Number,

    },
    // `date` must be of type Date. The default value is the current date
    minHyg: {
        type: Number,

    }

});

// This creates our model from the above schema, using mongoose's model method
var Data = mongoose.model("userData", userData);

// Export the User model
module.exports = Data;
