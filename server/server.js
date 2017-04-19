/**
 * Created by Seth on 4/19/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');

var config = require('./config');

var app = express();
app.use(express.static(__dirname + '../public'));
app.use(bodyParser.json());



var port = config.PORT;
app.listen(port, function(){
   console.log('Listening on port ' + port);
});

