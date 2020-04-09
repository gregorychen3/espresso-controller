package main

import "github.com/spf13/cobra"

func newRootCmd() *cobra.Command {
	cmd := cobra.Command{}
	return &cmd
}

func main() {
	if err := newRootCmd().Execute(); err != nil {
		println(err)
	}
	println("hello world")
}
