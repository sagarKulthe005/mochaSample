/**
  * Purpose         : Main JS file for node api
  * Created by      : Sagar Kulthe
  * Created on      : 04/09/2016
  * Last updated by : Sagar Kulthe
  * Last updated on : 13/09/2016
*/

//Add this so that code should be executed in "strict mode".
"use strict";

//NodeJS in-built packages  
var express = require("express"),
    http=require('http');

//Custom packages
var config=require('./config'),
    routes=require('./routes/routes');

//Create npm-express app
var app= express();
app.use(routes);

var httpServer = http.createServer(app);
httpServer.listen(config.port);
console.log("server started on " + config.port);
