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

Appliance.GroupHeadTemperature = {
  methodName: "GroupHeadTemperature",
  service: Appliance,
  requestStream: false,
  responseStream: true,
  requestType: pkg_appliancepb_appliance_pb.TemperatureStreamRequest,
  responseType: pkg_appliancepb_appliance_pb.TemperatureStreamResponse
};

Appliance.BoilerTemperature = {
  methodName: "BoilerTemperature",
  service: Appliance,
  requestStream: false,
  responseStream: true,
  requestType: pkg_appliancepb_appliance_pb.TemperatureStreamRequest,
  responseType: pkg_appliancepb_appliance_pb.TemperatureStreamResponse
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

ApplianceClient.prototype.groupHeadTemperature = function groupHeadTemperature(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Appliance.GroupHeadTemperature, {
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

ApplianceClient.prototype.boilerTemperature = function boilerTemperature(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Appliance.BoilerTemperature, {
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

