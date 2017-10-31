/**
  * Purpose         : JS file for defining node api routes
  * Created by      : Sagar Kulthe
  * Created on      : 04/09/2016
  * Last updated by : Sagar Kulthe
  * Last updated on : 13/09/2016
*/

//Add this so that code should be executed in "strict mode".
"use strict";

//NodeJS in-built packages  
var express = require("express");

//Custom packages
var businessController = require('../controller/businessController.js');

//express router
var router = express.Router();

//Define routes
//Route for addition of two numbers
router.get('/add', businessController.Addition);

//Route for substraction of two numbers
router.get('/substract', businessController.Substraction);

//Route for multiplication of two numbers
router.get('/multiply', businessController.Multiplication);

//Route for dividation of two numbers
router.get('/divide', businessController.Dividation);

module.exports=router;

