export GO111MODULE=on

PROTOC_GEN_TS_PATH="ui/node_modules/.bin/protoc-gen-ts"
PROTOC_JS_TS_OUT_DIR="ui/src/proto"

build:
	go build -o build/espresso ./cmd/espresso

install:
	go install ./cmd/espresso

proto:
	protoc -I pkg/appliancepb/ pkg/appliancepb/appliance.proto --go_out=plugins=grpc:pkg/appliancepb
	protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--js_out="import_style=commonjs,binary:${PROTOC_JS_TS_OUT_DIR}" \
		--ts_out="service=grpc-web:${PROTOC_JS_TS_OUT_DIR}" \
		pkg/appliancepb/appliance.proto

build-ui:
	(cd ui && npm i && npm run build)
	(cd internal/appliance && GO111MODULE=auto packr2)

.PHONY: build install

