package config

import (
	"fmt"
	"reflect"
	"regexp"
	"strings"

	"github.com/gregorychen3/espresso-controller/internal/helpers"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// matches (lowercase letter | number) followed by an uppercase letter
var regex = regexp.MustCompile("([a-z0-9])([A-Z])")

type Key struct {
	Path        string
	ShortFlag   string
	Description string
	Default     interface{}
}

func (k Key) Flag() string {
	switch reflect.ValueOf(k.Default).Kind() {
	case reflect.Slice:
		fallthrough
	case reflect.Map:
		return helpers.PluralToSingular(FormatFlag(k.Path))
	default:
		return FormatFlag(k.Path)
	}
}

func (k Key) EnvKey() string {
	return fmt.Sprintf("ESPRESSO_%s",
		strings.ToUpper(
			regex.ReplaceAllString(
				strings.ReplaceAll(k.Path, ".", "_"),
				"${1}_${2}",
			),
		),
	)
}

func (k Key) BindFlag(cmd *cobra.Command) {
	flag := FormatFlag(k.Path)
	switch reflect.ValueOf(k.Default).Kind() {
	case reflect.Int:
		cmd.Flags().IntP(flag, k.ShortFlag, viper.GetInt(k.Path), k.Description)
	case reflect.String:
		cmd.Flags().StringP(FormatFlag(k.Path), k.ShortFlag, viper.GetString(k.Path), k.Description)
	case reflect.Slice:
		cmd.Flags().StringSliceP(helpers.PluralToSingular(flag), k.ShortFlag, viper.GetStringSlice(k.Path), k.Description)
	case reflect.Map:
		cmd.Flags().StringToStringP(helpers.PluralToSingular(flag), k.ShortFlag, viper.GetStringMapString(k.Path), k.Description)
	case reflect.Bool:
		cmd.Flags().BoolP(FormatFlag(k.Path), k.ShortFlag, viper.GetBool(k.Path), k.Description)
	default:
		panic(fmt.Sprintf("unrecognized type for config key %+v", k))
	}
}
