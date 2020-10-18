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

Espresso.GroupHeadTemperature = {
  methodName: "GroupHeadTemperature",
  service: Espresso,
  requestStream: false,
  responseStream: true,
  requestType: pkg_espressopb_espresso_pb.TemperatureStreamRequest,
  responseType: pkg_espressopb_espresso_pb.TemperatureStreamResponse
};

Espresso.BoilerTemperature = {
  methodName: "BoilerTemperature",
  service: Espresso,
  requestStream: false,
  responseStream: true,
  requestType: pkg_espressopb_espresso_pb.TemperatureStreamRequest,
  responseType: pkg_espressopb_espresso_pb.TemperatureStreamResponse
};

Espresso.GetTargetTemperature = {
  methodName: "GetTargetTemperature",
  service: Espresso,
  requestStream: false,
  responseStream: false,
  requestType: pkg_espressopb_espresso_pb.GetTargetTemperatureRequest,
  responseType: pkg_espressopb_espresso_pb.GetTargetTemperatureResponse
};

Espresso.SetTargetTemperature = {
  methodName: "SetTargetTemperature",
  service: Espresso,
  requestStream: false,
  responseStream: false,
  requestType: pkg_espressopb_espresso_pb.SetTargetTemperatureRequest,
  responseType: pkg_espressopb_espresso_pb.SetTargetTemperatureResponse
};

Espresso.SetTerms = {
  methodName: "SetTerms",
  service: Espresso,
  requestStream: false,
  responseStream: false,
  requestType: pkg_espressopb_espresso_pb.SetTermsRequest,
  responseType: pkg_espressopb_espresso_pb.SetTermsResponse
};

exports.Espresso = Espresso;

function EspressoClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EspressoClient.prototype.groupHeadTemperature = function groupHeadTemperature(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Espresso.GroupHeadTemperature, {
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

EspressoClient.prototype.boilerTemperature = function boilerTemperature(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Espresso.BoilerTemperature, {
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

EspressoClient.prototype.getTargetTemperature = function getTargetTemperature(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Espresso.GetTargetTemperature, {
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

EspressoClient.prototype.setTargetTemperature = function setTargetTemperature(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Espresso.SetTargetTemperature, {
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

EspressoClient.prototype.setTerms = function setTerms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Espresso.SetTerms, {
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

