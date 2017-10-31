/**
  * Purpose         : This file contains application level unit test cases
  * Created by      : Sagar Kulthe
  * Created on      : 04/09/2016
  * Last updated by : Sagar Kulthe
  * Last updated on : 13/09/2016
*/

//Add this so that code should be executed in "strict mode".
"use strict";

//NodeJS in-built packages 
var request = require('request'),
  expect = require("chai").expect;

//Custom packages
var inputJson = require('./input.json');

//Global variables
var _apiBaseUrl = inputJson.apiBaseUrl;

//Parent describe block
describe("Calculator API", function () {

  //Describe block for addition api
  describe("Addition of two numbers", function () {
    //Api path
    var url = _apiBaseUrl + inputJson.apiForAddition;

    //it block for status code
    it("returns status 200", function (done) {
      request(url, function (error, response, body) {
        //compare the api response with expected response
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    //it block for addition operation
    it("returns addition of two numbers", function (done) {
      request(url, function (error, response, body) {
        //parse the response
        var finalResponse = JSON.parse(body);
        //compare the api response with expected response
        expect(finalResponse.data).to.equal(26);
        done();
      });
    });

  });

  //Describe block for substraction api
  describe("Substraction of two numbers", function () {
    //Api path
    var url = _apiBaseUrl + inputJson.apiForSubstraction;

    //it block for status code
    it("returns status 200", function (done) {
      request(url, function (error, response, body) {
        //compare the api response with expected response
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    //it block for substraction operation
    it("returns substraction of two numbers", function (done) {
      request(url, function (error, response, body) {
        //parse the response
        var finalResponse = JSON.parse(body);
        //compare the api response with expected response
        expect(finalResponse.data).to.equal(5);
        done();
      });
    });

  });


  //Describe block for multiplication api
  describe("Multiplication of two numbers", function () {
    //Api path
    var url = _apiBaseUrl + inputJson.apiForMultiplication;

    //it block for status code
    it("returns status 200", function (done) {
      request(url, function (error, response, body) {
        //compare the api response with expected response
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    //it block for multiplication operation
    it("returns multiplication of two numbers", function (done) {
      request(url, function (error, response, body) {
        //parse the response
        var finalResponse = JSON.parse(body);
        //compare the api response with expected response
        expect(finalResponse.data).to.equal(168);
        done();
      });
    });

  });




  //Describe block for dividation api
  describe("Dividation of two numbers", function () {
    //Api path
    var url = _apiBaseUrl + inputJson.apiForDividation;

    //it block for status code
    it("returns status 200", function (done) {
      request(url, function (error, response, body) {
        //compare the api response with expected response
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    //it block for dividation operation
    it("returns dividation of two numbers", function (done) {
      request(url, function (error, response, body) {
        //parse the response
        var finalResponse = JSON.parse(body);
        //compare the api response with expected response
        expect(finalResponse.data).to.equal(6);
        done();
      });
    });

  });


});