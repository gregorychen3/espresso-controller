FROM golang

ENV GO111MODULE=on

WORKDIR /espresso-controller
COPY . .
#RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /espresso-controller/build/espresso ./cmd/espresso
RUN make build-pi

EXPOSE 8080
ENTRYPOINT ["/espresso-controller/build/espresso", "appliance", "start"]

