/* eslint-disable */
// package: espressopb
// file: pkg/espressopb/espresso.proto

var pkg_espressopb_espresso_pb = require("../../pkg/espressopb/espresso_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Espresso = (function () {
  function Espresso() {}
  Espresso.serviceName = "espressopb.Espresso";
  return Espresso;
}());

Espresso.WatchBoilerTemperature = {
  methodName: "WatchBoilerTemperature",
  service: Espresso,
  requestStream: false,
  responseStream: true,
  requestType: pkg_espressopb_espresso_pb.WatchBoilerTemperatureRequest,
  responseType: pkg_espressopb_espresso_pb.WatchBoilerTemperatureResponse
};

Espresso.GetPIDConfig = {
  methodName: "GetPIDConfig",
  service: Espresso,
  requestStream: false,
  responseStream: false,
  requestType: pkg_espressopb_espresso_pb.GetPIDConfigRequest,
  responseType: pkg_espressopb_espresso_pb.PIDConfig
};

Espresso.SetPIDConfig = {
  methodName: "SetPIDConfig",
  service: Espresso,
  requestStream: false,
  responseStream: false,
  requestType: pkg_espressopb_espresso_pb.PIDConfig,
  responseType: pkg_espressopb_espresso_pb.PIDConfig
};

exports.Espresso = Espresso;

function EspressoClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EspressoClient.prototype.watchBoilerTemperature = function watchBoilerTemperature(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Espresso.WatchBoilerTemperature, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

EspressoClient.prototype.getPIDConfig = function getPIDConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Espresso.GetPIDConfig, {
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

EspressoClient.prototype.setPIDConfig = function setPIDConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Espresso.SetPIDConfig, {
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

exports.EspressoClient = EspressoClient;

