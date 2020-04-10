package log

import (
	"os"
	"time"

	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	"gopkg.in/natefinch/lumberjack.v2"
)

// The main logger from which all child loggers should be derived.
var Logger *zap.Logger

// A convenience logger that is used locally for shorthand logging. It has a
// caller skip of 1 and should not be used elsewhere.
var log *zap.Logger

// init initializes the logger to be useable even if UseDevLogger() or
// UseProdLogger() are never called, e.g. in tests.
func init() {
	log = zap.L()
	Logger = log
}

func Debug(msg string, fields ...zap.Field) {
	log.Debug(msg, fields...)
}

func Info(msg string, fields ...zap.Field) {
	log.Info(msg, fields...)
}

func Warn(msg string, fields ...zap.Field) {
	log.Warn(msg, fields...)
}

func Error(msg string, fields ...zap.Field) {
	log.Error(msg, fields...)
}

func Fatal(msg string, fields ...zap.Field) {
	log.Fatal(msg, fields...)
}

func DPanic(msg string, fields ...zap.Field) {
	log.DPanic(msg, fields...)
}

func UseProdLogger(filePath string, maxFileSizeMB int, maxFileAgeDays int, maxBackups int) {
	encoderConf := zap.NewProductionEncoderConfig()
	encoderConf.EncodeTime = zapcore.ISO8601TimeEncoder
	encoderConf.EncodeDuration = millisDurationEncoder
	encoder := zapcore.NewJSONEncoder(encoderConf)

	var writers []zapcore.WriteSyncer
	writers = append(writers, os.Stdout)
	if filePath != "" {
		writers = append(writers, zapcore.AddSync(&lumberjack.Logger{
			Filename:   filePath,
			MaxSize:    maxFileSizeMB,
			MaxAge:     maxFileAgeDays,
			MaxBackups: maxBackups,
		}))
	}

	core := zapcore.NewCore(encoder, zapcore.NewMultiWriteSyncer(writers...), zapcore.InfoLevel)
	Logger = zap.New(core)
	log = Logger.WithOptions(zap.AddCallerSkip(1))
}

func UseDevLogger() {
	cfg := zap.NewDevelopmentConfig()
	cfg.EncoderConfig.EncodeLevel = zapcore.CapitalColorLevelEncoder
	cfg.DisableStacktrace = true

	Logger, _ = cfg.Build()
	log = Logger.WithOptions(zap.AddCallerSkip(1))
	zap.NewStdLog(Logger)
}

type StringMap map[string]string

func (m StringMap) MarshalLogObject(e zapcore.ObjectEncoder) error {
	for k, v := range (map[string]string)(m) {
		e.AddString(k, v)
	}
	return nil
}

// MillisDurationEncoder serializes a time.Duration to a floating-point number
// of milliseconds elapsed.
func millisDurationEncoder(d time.Duration, enc zapcore.PrimitiveArrayEncoder) {
	enc.AppendFloat64(float64(d) / float64(time.Millisecond))
}
