var express = require('express');
var app = express();

app.get('/vidura', function(req, res){
    res.send("Hello world!");
});

app.listen(3000);