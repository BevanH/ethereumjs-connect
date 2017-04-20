"use strict";

var setFrom = require("./set-from");
var setupEventsAPI = require("./setup-events-api");
var setupFunctionsAPI = require("./setup-functions-api");
var connect = require("./connect");

module.exports = {
  version: "4.0.1",
  setFrom: setFrom,
  setupEventsAPI: setupEventsAPI,
  setupFunctionsAPI: setupFunctionsAPI,
  connect: connect
};
