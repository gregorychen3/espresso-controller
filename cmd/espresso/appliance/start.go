package appliance

import (
	"log"

	"github.com/spf13/cobra"
)

func NewApplianceStartCmd() *cobra.Command {
	cmd := cobra.Command{
		Use:   "start",
		Short: "Start an espresso making appliance",
		Long:  "Start an espresso making appliance",
		Run: func(cmd *cobra.Command, args []string) {
			log.Fatal("implement me")
		},
	}

	return &cmd
}
