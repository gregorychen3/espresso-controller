package main

import (
	"github.com/gregorychen3/espresso-controller/cmd/espresso/appliance"
	"github.com/gregorychen3/espresso-controller/cmd/espresso/log"
	"github.com/spf13/cobra"
)

var logo =`
     ╓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    █▀─╓▄         ┌▄▄┌         ▄▄ ╙█
    █ ╫█╠█ ╔▓▓  ▄█▀╟█╙█▄  ╔▓▓ █▌╟█ ██▓▄
    █  ╙╙       █  ╘▀  █▄      ╙╙  █─▐█
    █ ╔█▀█ ╓▄▄  █▌    ▄█  ╓▄▄ ▓██▌ █▄██
    █  ▀▀▀       ╙▀▀▀▀╙       ╙▀▀└ █╨
    ╙▀██▓▓▓▓▓▓██▓▓▓▓▓▓▓▓██▓██▓▓▓██▀╙
 ╔▓▓▓▓██▓▓▓▓▓▓█▌        ▐▌ ▐█▓▓▓██▓▓▓▄
 ╫█▄▄▄▄▄▄▄▄▄▄▄██▄▄▄▄▄▄▄▄██      ▐█ ▄██▄
      ╫▌          █▌▄█          ▐█ █▌▐█
      ╫▌           └└─          ▐█ █▄▐█
      ╫▌      ╒▓▓▓▓▓▓▓▓▓▓▓▓▓▄   ▐█ ╙╙╙└
      ╫▌      ▐█▄▄▄▄▄▄▄▄██  █▌  ▐█
      ╫▌      ╘█        █▀▀▀▀   ▐█
      █▌       ╠█▓▄┌ ▄▄█▌       ▐█
    █▀╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙█
    █                              █─
    ╙▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
`

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

	cmd.AddCommand(
		appliance.NewApplianceCmd(),
	)

	return &cmd
}

func main() {
	log.Info(logo)
	if err := newRootCmd().Execute(); err != nil {
		log.Fatal(err.Error())
	}
}
