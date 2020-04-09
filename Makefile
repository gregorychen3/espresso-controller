export GO111MODULE=on

build:
	go build -o build/espresso ./cmd/espresso

.PHONY: build

