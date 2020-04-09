package appliance

import (
	"log"

	"github.com/spf13/cobra"
)

func NewApplianceCmd() *cobra.Command {
	cmd := cobra.Command{
		Use:   "appliance",
		Short: "Manage an espresso making appliance",
		Long:  "Manage an espresso making appliance",
		Run: func(cmd *cobra.Command, args []string) {
			if err := cmd.Help(); err != nil {
				log.Fatal("Failed to output help for command")
			}
		},
	}

	cmd.AddCommand(
		NewApplianceStartCmd(),
	)

	return &cmd
}
