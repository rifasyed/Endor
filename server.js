// var express = require("express");
// var bodyParser = require("body-parser");
// var logger = require("morgan");
// var mongoose = require("mongoose");
// var Endor = require('./models/tempModel')
// var boardInit = require('./backComps/logicBoard')

// var PORT = 3000;

// // Requiring the `User` model for accessing the `users` collection
// // var TempModel = require("./dataModel");

// // Initialize Express
// var app = express();

// // Configure middleware

// // Use morgan logger for logging requests
// app.use(logger("dev"));
// // Use body-parser for handling form submissions
// app.use(bodyParser.urlencoded({ extended: true }));
// // Use express.static to serve the public folder as a static directory
// app.use(express.static("public"));

// mongoose.connect("mongodb://localhost/Endor");
// boardInit()
// // Routes



// // Start the server
// app.listen(PORT, function() {
//   console.log("App running on port " + PORT + "!");
// });


/////////////////////////////////////////////////////////////////////////

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const boardInit = require('./utils/logicBoard')
const Endor = require('./models/tempModel')
const TempRouter = require('./routes/TempRouter')

const PORT = process.env.PORT || 3001;
// const cors = require('cors')
const app = express();


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/Endor').then(
  () => { console.log('Database is connected') },
  err => {
    console.log('Can not connect to the database' + err)
  });
boardInit()

// Require routes
require('./routes/TempRouter')(app)
// require('./routes/siginin')(app)

// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.get('/temp', function (req, res) {
  Endor.temp.find({}, function (err, docs) {
    if (err) {
      throw err;
    }
    else {
      res.json(docs)
    }
  })
})

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`)
})