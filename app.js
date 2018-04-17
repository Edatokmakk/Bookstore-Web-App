var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

// Connection to Database
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

//Routing Functions
app.get('/',function(req,res){
  res.send('Please use /api/books or /api/genres');
});
app.listen(3000,function(){
  console.log('Server Running on Port 3000....');
});