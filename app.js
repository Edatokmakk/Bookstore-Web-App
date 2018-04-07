const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.get('/',(req,res)=>{
    res.write('Hello World');
});

app.listen(3000,()=>{
    console.log('Server Running on Port 3000');
});