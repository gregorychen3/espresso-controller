export GO111MODULE=on

build:
	go build -o build/espresso ./cmd/espresso

install:
	go install ./cmd/espresso

proto:
	protoc -I pkg/appliancepb/ pkg/appliancepb/appliance.proto --go_out=plugins=grpc:pkg/appliancepb

build-ui:
	(cd ui && npm i && npm run build)
	(cd internal/appliance && GO111MODULE=auto packr2)

.PHONY: build install

