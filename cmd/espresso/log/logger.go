// Package log provides cli-appropriate logging capabilities
package log

import (
	"os"

	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

var log *zap.SugaredLogger
var minLevel = zapcore.InfoLevel

func init() {
	isErrLevel := zap.LevelEnablerFunc(func(level zapcore.Level) bool {
		return level >= zapcore.ErrorLevel
	})

	isNonErrLevel := zap.LevelEnablerFunc(func(level zapcore.Level) bool {
		return minLevel <= level && level < zapcore.ErrorLevel
	})

	stdoutWriteSyncer := zapcore.Lock(os.Stdout)
	stderrWriteSyncer := zapcore.Lock(os.Stderr)

	config := zap.NewDevelopmentEncoderConfig()
	config.EncodeLevel = zapcore.CapitalColorLevelEncoder
	config.EncodeTime = nil
	config.EncodeLevel = nil
	consoleEncoder := zapcore.NewConsoleEncoder(config)

	core := zapcore.NewTee(
		zapcore.NewCore(consoleEncoder, stdoutWriteSyncer, isErrLevel),
		zapcore.NewCore(consoleEncoder, stderrWriteSyncer, isNonErrLevel),
	)

	log = zap.New(core).Sugar()
}

func Debug(msg string, args ...interface{}) {
	log.Debugf(msg, args...)
}

func Info(msg string, args ...interface{}) {
	log.Infof(msg, args...)
}

func Warn(msg string, args ...interface{}) {
	log.Warnf(msg, args...)
}

func Error(msg string, args ...interface{}) {
	log.Errorf(msg, args...)
}

func Fatal(msg string, args ...interface{}) {
	log.Fatalf(msg, args...)
}

func SetVerbose() {
	minLevel = zapcore.DebugLevel
}

func UnsetVerbose() {
	minLevel = zapcore.InfoLevel
}

func Sync() {
	log.Sync()
}
