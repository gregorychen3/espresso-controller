export GO111MODULE=on

PROTOC_GEN_TS_PATH="ui/node_modules/.bin/protoc-gen-ts"
PROTOC_JS_TS_OUT_DIR="ui/src/proto"

build:
	go build -o build/espresso ./cmd/espresso

build.ui:
	(cd ui && npm i && npm run build)
	(cd internal/espresso && GO111MODULE=auto packr2)

build.pi:
	env GOOS=linux GOARCH=arm GOARM=7 go build -o build/espresso ./cmd/espresso

install:
	go install ./cmd/espresso

proto:
	protoc -I pkg/espressopb/ pkg/espressopb/espresso.proto --go_out=plugins=grpc:pkg/espressopb
	protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--js_out="import_style=commonjs,binary:${PROTOC_JS_TS_OUT_DIR}" \
		--ts_out="service=grpc-web:${PROTOC_JS_TS_OUT_DIR}" \
		pkg/espressopb/espresso.proto
	for file in `find ui/src/proto -name '*.js'`; do \
		line=$$(sed -n '1p' $$file); \
		if [ "$$line" != "/* eslint-disable */" ]; then \
				echo '/* eslint-disable */' | cat - "$$file" > temp && mv temp "$$file"; \
		fi \
	done

.PHONY: build build.ui build.pi install proto

