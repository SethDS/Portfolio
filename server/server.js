/**
 * Created by Seth on 4/19/2017.
 */
var express = require('express');

var config = require('./config');

var app = express();
app.use(express.static(__dirname + '../public'));


var port = config.PORT;
app.listen(port, function(){
   console.log('Listening on ' + port);
});

