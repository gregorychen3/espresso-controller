export GO111MODULE=on

build:
	go build -o build/espresso ./cmd/espresso

install:
	go install ./cmd/espresso

.PHONY: build install
