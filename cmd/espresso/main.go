package main

import "github.com/spf13/cobra"

func newRootCmd() *cobra.Command {
	cmd := cobra.Command{
		Use:   "espresso",
		Short: "Control and monitor an espresso machine",
		Long:  "Control and monitor an espresso machine",
		Run: func(cmd *cobra.Command, args []string) {
			if err := cmd.Help(); err != nil {
				println("Failed to output help for command")
			}
		},
	}

	return &cmd
}

func main() {
	if err := newRootCmd().Execute(); err != nil {
		println(err)
	}
	println("hello world")
}
