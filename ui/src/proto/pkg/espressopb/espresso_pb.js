/* eslint-disable */
// source: pkg/espressopb/espresso.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.espressopb.Configuration', null, global);
goog.exportSymbol('proto.espressopb.GetConfigurationRequest', null, global);
goog.exportSymbol('proto.espressopb.TemperatureSample', null, global);
goog.exportSymbol('proto.espressopb.WatchBoilerTemperatureRequest', null, global);
goog.exportSymbol('proto.espressopb.WatchBoilerTemperatureResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.espressopb.TemperatureSample = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.espressopb.TemperatureSample, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.espressopb.TemperatureSample.displayName = 'proto.espressopb.TemperatureSample';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.espressopb.WatchBoilerTemperatureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.espressopb.WatchBoilerTemperatureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.espressopb.WatchBoilerTemperatureRequest.displayName = 'proto.espressopb.WatchBoilerTemperatureRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.espressopb.WatchBoilerTemperatureResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.espressopb.WatchBoilerTemperatureResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.espressopb.WatchBoilerTemperatureResponse.displayName = 'proto.espressopb.WatchBoilerTemperatureResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.espressopb.GetConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.espressopb.GetConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.espressopb.GetConfigurationRequest.displayName = 'proto.espressopb.GetConfigurationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.espressopb.Configuration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.espressopb.Configuration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.espressopb.Configuration.displayName = 'proto.espressopb.Configuration';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.espressopb.TemperatureSample.prototype.toObject = function(opt_includeInstance) {
  return proto.espressopb.TemperatureSample.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.espressopb.TemperatureSample} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.espressopb.TemperatureSample.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    observedAt: (f = msg.getObservedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.espressopb.TemperatureSample}
 */
proto.espressopb.TemperatureSample.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.espressopb.TemperatureSample;
  return proto.espressopb.TemperatureSample.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.espressopb.TemperatureSample} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.espressopb.TemperatureSample}
 */
proto.espressopb.TemperatureSample.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setObservedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.espressopb.TemperatureSample.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.espressopb.TemperatureSample.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.espressopb.TemperatureSample} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.espressopb.TemperatureSample.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getObservedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional float value = 1;
 * @return {number}
 */
proto.espressopb.TemperatureSample.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.espressopb.TemperatureSample} returns this
 */
proto.espressopb.TemperatureSample.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp observed_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.espressopb.TemperatureSample.prototype.getObservedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.espressopb.TemperatureSample} returns this
*/
proto.espressopb.TemperatureSample.prototype.setObservedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.espressopb.TemperatureSample} returns this
 */
proto.espressopb.TemperatureSample.prototype.clearObservedAt = function() {
  return this.setObservedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.espressopb.TemperatureSample.prototype.hasObservedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.espressopb.WatchBoilerTemperatureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.espressopb.WatchBoilerTemperatureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.espressopb.WatchBoilerTemperatureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.espressopb.WatchBoilerTemperatureRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.espressopb.WatchBoilerTemperatureRequest}
 */
proto.espressopb.WatchBoilerTemperatureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.espressopb.WatchBoilerTemperatureRequest;
  return proto.espressopb.WatchBoilerTemperatureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.espressopb.WatchBoilerTemperatureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.espressopb.WatchBoilerTemperatureRequest}
 */
proto.espressopb.WatchBoilerTemperatureRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.espressopb.WatchBoilerTemperatureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.espressopb.WatchBoilerTemperatureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.espressopb.WatchBoilerTemperatureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.espressopb.WatchBoilerTemperatureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.espressopb.WatchBoilerTemperatureResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.espressopb.WatchBoilerTemperatureResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.espressopb.WatchBoilerTemperatureResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.espressopb.WatchBoilerTemperatureResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sample: (f = msg.getSample()) && proto.espressopb.TemperatureSample.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.espressopb.WatchBoilerTemperatureResponse}
 */
proto.espressopb.WatchBoilerTemperatureResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.espressopb.WatchBoilerTemperatureResponse;
  return proto.espressopb.WatchBoilerTemperatureResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.espressopb.WatchBoilerTemperatureResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.espressopb.WatchBoilerTemperatureResponse}
 */
proto.espressopb.WatchBoilerTemperatureResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.espressopb.TemperatureSample;
      reader.readMessage(value,proto.espressopb.TemperatureSample.deserializeBinaryFromReader);
      msg.setSample(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.espressopb.WatchBoilerTemperatureResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.espressopb.WatchBoilerTemperatureResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.espressopb.WatchBoilerTemperatureResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.espressopb.WatchBoilerTemperatureResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSample();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.espressopb.TemperatureSample.serializeBinaryToWriter
    );
  }
};


/**
 * optional TemperatureSample sample = 2;
 * @return {?proto.espressopb.TemperatureSample}
 */
proto.espressopb.WatchBoilerTemperatureResponse.prototype.getSample = function() {
  return /** @type{?proto.espressopb.TemperatureSample} */ (
    jspb.Message.getWrapperField(this, proto.espressopb.TemperatureSample, 2));
};


/**
 * @param {?proto.espressopb.TemperatureSample|undefined} value
 * @return {!proto.espressopb.WatchBoilerTemperatureResponse} returns this
*/
proto.espressopb.WatchBoilerTemperatureResponse.prototype.setSample = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.espressopb.WatchBoilerTemperatureResponse} returns this
 */
proto.espressopb.WatchBoilerTemperatureResponse.prototype.clearSample = function() {
  return this.setSample(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.espressopb.WatchBoilerTemperatureResponse.prototype.hasSample = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.espressopb.GetConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.espressopb.GetConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.espressopb.GetConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.espressopb.GetConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.espressopb.GetConfigurationRequest}
 */
proto.espressopb.GetConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.espressopb.GetConfigurationRequest;
  return proto.espressopb.GetConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.espressopb.GetConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.espressopb.GetConfigurationRequest}
 */
proto.espressopb.GetConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.espressopb.GetConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.espressopb.GetConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.espressopb.GetConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.espressopb.GetConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.espressopb.Configuration.prototype.toObject = function(opt_includeInstance) {
  return proto.espressopb.Configuration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.espressopb.Configuration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.espressopb.Configuration.toObject = function(includeInstance, msg) {
  var f, obj = {
    temperature: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    p: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    i: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    d: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    setAt: (f = msg.getSetAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.espressopb.Configuration}
 */
proto.espressopb.Configuration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.espressopb.Configuration;
  return proto.espressopb.Configuration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.espressopb.Configuration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.espressopb.Configuration}
 */
proto.espressopb.Configuration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTemperature(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setP(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setI(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setD(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSetAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.espressopb.Configuration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.espressopb.Configuration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.espressopb.Configuration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.espressopb.Configuration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemperature();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getP();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getI();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getD();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getSetAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional float temperature = 1;
 * @return {number}
 */
proto.espressopb.Configuration.prototype.getTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.espressopb.Configuration} returns this
 */
proto.espressopb.Configuration.prototype.setTemperature = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float p = 2;
 * @return {number}
 */
proto.espressopb.Configuration.prototype.getP = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.espressopb.Configuration} returns this
 */
proto.espressopb.Configuration.prototype.setP = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float i = 3;
 * @return {number}
 */
proto.espressopb.Configuration.prototype.getI = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.espressopb.Configuration} returns this
 */
proto.espressopb.Configuration.prototype.setI = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float d = 4;
 * @return {number}
 */
proto.espressopb.Configuration.prototype.getD = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.espressopb.Configuration} returns this
 */
proto.espressopb.Configuration.prototype.setD = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp set_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.espressopb.Configuration.prototype.getSetAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.espressopb.Configuration} returns this
*/
proto.espressopb.Configuration.prototype.setSetAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.espressopb.Configuration} returns this
 */
proto.espressopb.Configuration.prototype.clearSetAt = function() {
  return this.setSetAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.espressopb.Configuration.prototype.hasSetAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.espressopb);
