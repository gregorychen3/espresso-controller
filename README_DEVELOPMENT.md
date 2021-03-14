# Development

The `espresso` program is a GRPC server (Golang) and UI (Typescript) in a single binary.

## Workflow

### Proto
The file `pkg/espressopb/espresso.proto` defines the GRPC service and message types used for communication between the UI and backend. If modifying this file, re-run grpc codegen using `make proto`.

### UI
If making UI changes, start the UI dev server by running `npm start` inside `ui/`. 

### Build

- Build the production UI and compile it into the all-in-one `espresso` binary for your local dev machine's arch, run `make build`. 
- Build the production UI and compile it into the all-in-one `espresso` binary for RaspberrPi arch, run `make build.ui`.

