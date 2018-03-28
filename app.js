var express = require('express');
var app = express();
app.get('/',function(req,res){
	res.send('Hello World');
});
app.get('/a',function(req,res){
	res.send('Hell');
});
app.get('/b',function(req,res){
	res.send('World');
});
app.get('/c',function(req,res){
	res.send('C');
});
app.get('/d',function(req,res){
	res.send('D');
});
app.listen(3000,function(){
	console.log('Server Running on Port 3000 ...');
});