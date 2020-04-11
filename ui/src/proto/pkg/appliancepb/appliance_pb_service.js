/* eslint-disable */
// package: appliancepb
// file: pkg/appliancepb/appliance.proto

var pkg_appliancepb_appliance_pb = require("../../pkg/appliancepb/appliance_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Appliance = (function () {
  function Appliance() {}
  Appliance.serviceName = "appliancepb.Appliance";
  return Appliance;
}());

Appliance.GetTemperatureHistory = {
  methodName: "GetTemperatureHistory",
  service: Appliance,
  requestStream: false,
  responseStream: false,
  requestType: pkg_appliancepb_appliance_pb.GetTemperatureHistoryRequest,
  responseType: pkg_appliancepb_appliance_pb.GetTemperatureHistoryResponse
};

Appliance.GetCurrentTemperature = {
  methodName: "GetCurrentTemperature",
  service: Appliance,
  requestStream: false,
  responseStream: false,
  requestType: pkg_appliancepb_appliance_pb.GetCurrentTemperatureRequest,
  responseType: pkg_appliancepb_appliance_pb.GetCurrentTemperatureResponse
};

Appliance.GetTargetTemperature = {
  methodName: "GetTargetTemperature",
  service: Appliance,
  requestStream: false,
  responseStream: false,
  requestType: pkg_appliancepb_appliance_pb.GetTargetTemperatureRequest,
  responseType: pkg_appliancepb_appliance_pb.GetTargetTemperatureResponse
};

Appliance.SetTargetTemperature = {
  methodName: "SetTargetTemperature",
  service: Appliance,
  requestStream: false,
  responseStream: false,
  requestType: pkg_appliancepb_appliance_pb.SetTargetTemperatureRequest,
  responseType: pkg_appliancepb_appliance_pb.SetTargetTemperatureResponse
};

exports.Appliance = Appliance;

function ApplianceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ApplianceClient.prototype.getTemperatureHistory = function getTemperatureHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Appliance.GetTemperatureHistory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApplianceClient.prototype.getCurrentTemperature = function getCurrentTemperature(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Appliance.GetCurrentTemperature, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApplianceClient.prototype.getTargetTemperature = function getTargetTemperature(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Appliance.GetTargetTemperature, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ApplianceClient.prototype.setTargetTemperature = function setTargetTemperature(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Appliance.SetTargetTemperature, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ApplianceClient = ApplianceClient;

