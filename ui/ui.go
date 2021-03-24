package ui

import "embed"

//go:embed build
// Build contains the content of the build directory
var Build embed.FS
