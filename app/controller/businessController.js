/**
  * Purpose         : This file contains application level business logic
  * Created by      : Sagar Kulthe
  * Created on      : 04/09/2016
  * Last updated by : Sagar Kulthe
  * Last updated on : 13/09/2016
*/

//Add this so that code should be executed in "strict mode".
"use strict";

//Global variables
var _successStatusMessage = 'sucess',
    _errorStatusMessage = 'error',
    _invalidStatusMessage = 'invalid',
    _insufficientMessage = 'insufficient parameters provided',
    _additionSuccess = 'addition of two numbers is successful',
    _additionFailure = 'addition of two numbers failed',     
    _substractionSuccess = 'substraction of two numbers is successful',
    _substractionFailure = 'substraction of two numbers failed',
    _multiplicationSuccess = 'multiplication of two numbers is successful',
    _multiplicationFailure = 'multiplication of two numbers failed', 
    _dividationSuccess = 'dividation of two numbers is successful',
    _dividationFailure = 'dividation of two numbers failed',     
    //response status code
    _success=200,
    _bad=400,
    _error=500;



//Method for addition of two numbers
exports.Addition = function (req, res) {
    //Local variables
    var result = 0;
    var responseMessage = '';
    var responseStatus = '';
    var responseCode=0;

    //Exception handling
    try {
        //Check whether required parameter are supplied or not
        if (req.query && req.query.param1 && req.query.param2) {
            //Convert string input to number   
            var inputNumber1 = parseFloat(req.query.param1);
            var inputNumber2 = parseFloat(req.query.param2);

            //Add provided two numbers
            var additionResult = inputNumber1 + inputNumber2;

            //Set variables to use in response
            responseMessage = _additionSuccess;
            responseStatus = _successStatusMessage;
            result = additionResult;
            responseCode=_success;
        }

        else {
            //Set variables to use in response.
            responseMessage = _invalidStatusMessage;
            responseStatus = _insufficientMessage;
            responseCode=_bad;
        }

        //Return response in json format
        res.status(responseCode);
        res.json({ status: responseStatus, message: responseMessage, data: result });

    }
    catch (error) {
        //Set variables to use in response.
        responseMessage = _additionFailure;
        responseStatus = _errorStatusMessage;
        result = 0;
        responseCode=_error;

        //Return response in json format 
        res.status(_error);      
        res.json({ status: responseStatus, message: responseMessage, data: result });
    }

}


//Method for substraction of two numbers
exports.Substraction = function (req, res) {
    //Local variables
    var result = 0;
    var responseMessage = '';
    var responseStatus = '';
    var responseCode=0;

    //Exception handling
    try {
        //Check whether required parameter are supplied or not
        if (req.query && req.query.param1 && req.query.param2) {
            //Convert string input to number   
            var inputNumber1 = parseFloat(req.query.param1);
            var inputNumber2 = parseFloat(req.query.param2);

            //Substract second number from first number
            var substractionResult = inputNumber1 - inputNumber2;

            //Set variables to use in response
            responseMessage = _substractionSuccess;
            responseStatus = _successStatusMessage;
            result = substractionResult;
            responseCode=_success;
        }

        else {
            //Set variables to use in response.
            responseMessage = _invalidStatusMessage;
            responseStatus = _insufficientMessage;
            responseCode=_bad;
        }

        //Return response in json format
        res.status(responseCode);
        res.json({ status: responseStatus, message: responseMessage, data: result });

    }
    catch (error) {
        //Set variables to use in response.
        responseMessage = _substractionFailure;
        responseStatus = _errorStatusMessage;
        result = 0;
        responseCode=_error;

        //Return response in json format 
        res.status(_error);      
        res.json({ status: responseStatus, message: responseMessage, data: result });
    }

}

//Method for multiplication of two numbers
exports.Multiplication = function (req, res) {
    //Local variables
    var result = 0;
    var responseMessage = '';
    var responseStatus = '';
    var responseCode=0;

    //Exception handling
    try {
        //Check whether required parameter are supplied or not
        if (req.query && req.query.param1 && req.query.param2) {
            //Convert string input to number   
            var inputNumber1 = parseFloat(req.query.param1);
            var inputNumber2 = parseFloat(req.query.param2);

            //Multiply provided numbers
            var multiplicationResult = inputNumber1 * inputNumber2;

            //Set variables to use in response
            responseMessage = _multiplicationSuccess;
            responseStatus = _successStatusMessage;
            result = multiplicationResult;
            responseCode=_success;
        }

        else {
            //Set variables to use in response.
            responseMessage = _invalidStatusMessage;
            responseStatus = _insufficientMessage;
            responseCode=_bad;
        }

        //Return response in json format
        res.status(responseCode);
        res.json({ status: responseStatus, message: responseMessage, data: result });

    }
    catch (error) {
        //Set variables to use in response.
        responseMessage = _multiplicationFailure;
        responseStatus = _errorStatusMessage;
        result = 0;
        responseCode=_error;

        //Return response in json format 
        res.status(_error);      
        res.json({ status: responseStatus, message: responseMessage, data: result });
    }

}

//Method for dividation of two numbers
exports.Dividation = function (req, res) {
    //Local variables
    var result = 0;
    var responseMessage = '';
    var responseStatus = '';
    var responseCode=0;

    //Exception handling
    try {
        //Check whether required parameter are supplied or not
        if (req.query && req.query.param1 && req.query.param2) {
            //Convert string input to number   
            var inputNumber1 = parseFloat(req.query.param1);
            var inputNumber2 = parseFloat(req.query.param2);

            //Divide first number by second number
            var dividationResult = inputNumber1/inputNumber2;

            //Set variables to use in response
            responseMessage = _dividationSuccess;
            responseStatus = _successStatusMessage;
            result = dividationResult;
            responseCode=_success;
        }

        else {
            //Set variables to use in response.
            responseMessage = _invalidStatusMessage;
            responseStatus = _insufficientMessage;
            responseCode=_bad;
        }

        //Return response in json format
        res.status(responseCode);
        res.json({ status: responseStatus, message: responseMessage, data: result });

    }
    catch (error) {
        //Set variables to use in response.
        responseMessage = _dividationFailure;
        responseStatus = _errorStatusMessage;
        result = 0;
        responseCode=_error;

        //Return response in json format 
        res.status(_error);      
        res.json({ status: responseStatus, message: responseMessage, data: result });
    }

}
