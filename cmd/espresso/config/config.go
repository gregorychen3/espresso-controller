package config

import (
	"fmt"
	"reflect"
	"strings"

	"github.com/gregorychen3/espresso-controller/internal/helpers"
)

const (
	KeyLogVerbose        = "Log.Verbose"
	KeyLogFilePath       = "Log.File.Path"
	KeyLogFileMaxSize    = "Log.File.MaxSize"
	KeyLogFileMaxAge     = "Log.File.MaxAge"
	KeyLogFileMaxBackups = "Log.File.MaxBackups"
)

func FormatFlag(key string) string {
	return strings.Join(helpers.MapStrings(strings.Split(key, "."), helpers.ToKebabCase), "-")
}

// StringToMapStringString is a DecodeHookFunc that converts a string to
// map[string]string. E.g.,
//    "[k2=v2,k2=v2]" => map[string]string{"k2":"v2", "k2":"v2"}
//
// This is a workaround, since viper does not handle this properly. See
// https://github.com/spf13/viper/issues/608.
func StringToMapStringString(from reflect.Type, to reflect.Type, data interface{}) (interface{}, error) {
	if from.Kind() != reflect.String || to.Kind() != reflect.Map {
		return data, nil
	}

	switch data.(type) {
	case string:
		dataTrimmed := strings.Trim(data.(string), "[]")
		dataEntries := strings.Split(dataTrimmed, ",")

		dataMap := make(map[string]string, len(dataEntries))
		for _, entry := range dataEntries {
			entrySplit := strings.SplitN(entry, "=", 2)
			if len(entrySplit) != 2 {
				return data, fmt.Errorf("unable to interpret value as map[string]string: %v", data)
			}
			dataMap[entrySplit[0]] = entrySplit[1]
		}
		return dataMap, nil
	default:
		return data, fmt.Errorf("unable to interpret value as map[string]string: %v", data)
	}
}
