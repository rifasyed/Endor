const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const boardInit = require('./logicBoard')
const Endor = require('./models/tempModel')
// const config = require('./db')
const TempRouter = require('./routes/TempRouter')

const PORT = process.env.PORT || 3001;
const cors = require('cors')
const app = express();


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
require('./routes/TempRouter')(app)
require('./routes/siginin')(app)

mongoose.connect('mongodb://localhost/Endor').then(
  () => {console.log('Database is connected')},
  err => { console.log('Can not connect to the database' +err)
});
boardInit()

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.get('/temp', function(req, res) {
  Endor.datas.find({}, function(err, docs) {
    if(err){
      throw err;
    } 
    else {
      res.json(docs)
    }
  })
})

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`)
})