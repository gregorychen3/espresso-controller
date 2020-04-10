package main

import (
	"github.com/gregorychen3/espresso-controller/cmd/espresso/appliance"
	"github.com/gregorychen3/espresso-controller/cmd/espresso/cmdutil"
	"github.com/gregorychen3/espresso-controller/cmd/espresso/config"
	"github.com/gregorychen3/espresso-controller/cmd/espresso/log"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

func newRootCmd() *cobra.Command {
	cmd := cobra.Command{
		Use:   "espresso",
		Short: "Control and monitor an espresso machine",
		Long:  "Control and monitor an espresso machine",
		Run: func(cmd *cobra.Command, args []string) {
			if err := cmd.Help(); err != nil {
				log.Fatal("Failed to output help for command")
			}
			log.Info("\nFind more information at https://github.com/gregorychen3/espresso-controller")
		},
	}

	pFlags := cmd.PersistentFlags()
	pFlags.BoolP("verbose", "v", false, "verbose output")
	viper.BindPFlag(config.KeyLogVerbose, pFlags.Lookup("verbose"))

	cobra.OnInitialize(onInit)

	cmd.AddCommand(appliance.NewApplianceCmd())

	return &cmd
}

func main() {
	log.Info(cmdutil.Logo)
	if err := newRootCmd().Execute(); err != nil {
		log.Fatal(err.Error())
	}
}

func onInit() {
	if verbose := viper.GetBool(config.KeyLogVerbose); verbose {
		log.SetVerbose()
	}
}
