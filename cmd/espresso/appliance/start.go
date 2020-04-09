package appliance

import (
	"github.com/gregorychen3/espresso-controller/cmd/espresso/log"
	"github.com/gregorychen3/espresso-controller/internal/appliance"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

func NewApplianceStartCmd() *cobra.Command {
	cmd := cobra.Command{
		Use:   "start",
		Short: "Start an espresso making appliance",
		Long:  "Start an espresso making appliance",
		Run: func(cmd *cobra.Command, args []string) {
			c := appliance.Configuration{}
			if err := viper.Unmarshal(&c); err != nil {
				log.Fatal("Unmarshalling configuration: %s\n", err.Error())
			}

			server, err := appliance.New(c)
			if err != nil {
				log.Fatal("Failed to create server: %s\n", err.Error())
			}

			if err := server.Run(); err != nil {
				log.Fatal("Failed to run server: %s", err.Error())
			}
		},
	}

	return &cmd
}
