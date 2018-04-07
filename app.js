var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Genre = require('./models/genre');
//Connection to Database
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/',function(req,res){
    res.send('Please Use /api/books or /api/genre');
});

app.get('/api/books',function(req,res){
    res.send('Hello to books');
});

app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err,genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.listen(3000,function(){
    console.log('Server Running on Port  3000');
});
