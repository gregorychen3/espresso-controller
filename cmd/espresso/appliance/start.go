package appliance

import (
	"github.com/gregorychen3/espresso-controller/cmd/espresso/config"
	"github.com/gregorychen3/espresso-controller/cmd/espresso/log"
	"github.com/gregorychen3/espresso-controller/internal/appliance"
	serverLogger "github.com/gregorychen3/espresso-controller/internal/log"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var configKeys = []config.Key{
	{Path: "Port", ShortFlag: "p", Description: "Port on which the appliance server should listen", Default: "8080"},
	{Path: "RelayPin", ShortFlag: "r", Description: "The GPIO pin on which the relay is connected", Default: 5},
	{Path: "BoilerThermCsPin", ShortFlag: "", Description: "The GPIO pin connected to the boiler thermometer's max31855 chip select, aka chip enable", Default: 8},
	{Path: "BoilerThermClkPin", ShortFlag: "", Description: "The GPIO pin connected to the boiler thermometer's max31855 clock", Default: 11},
	{Path: "BoilerThermMisoPin", ShortFlag: "", Description: "The GPIO pin connected to the boiler thermometer's max31855 data output", Default: 9},
}

func NewApplianceStartCmd() *cobra.Command {
	cmd := cobra.Command{
		Use:   "start",
		Short: "Start an espresso making appliance",
		Long:  "Start an espresso making appliance",
		PreRun: func(cmd *cobra.Command, args []string) {
			// Bind config in PreRun() to avoid collisions with other commands' flags
			for _, k := range configKeys {
				if err := viper.BindPFlag(k.Path, cmd.Flags().Lookup(k.Flag())); err != nil {
					log.Fatal("Failed to bind flag to config: %+v", k)
				}
			}
		},
		RunE: func(cmd *cobra.Command, args []string) error {
			if verbose := viper.GetBool(config.KeyLogVerbose); verbose {
				serverLogger.UseDevLogger()
			} else {
				serverLogger.UseProdLogger(
					viper.GetString(config.KeyLogFilePath),
					viper.GetInt(config.KeyLogFileMaxSize),
					viper.GetInt(config.KeyLogFileMaxAge),
					viper.GetInt(config.KeyLogFileMaxBackups),
				)
			}

			c := appliance.Configuration{}
			if err := viper.Unmarshal(&c); err != nil {
				log.Fatal("Unmarshalling configuration: %s\n", err.Error())
			}

			server := appliance.New(c)
			return server.Run()
		},
	}

	for _, k := range configKeys {
		if k.Default != nil {
			viper.SetDefault(k.Path, k.Default)
		}
		k.BindFlag(&cmd)
	}

	for _, k := range configKeys {
		viper.BindEnv(k.Path, k.EnvKey())
	}

	return &cmd
}
