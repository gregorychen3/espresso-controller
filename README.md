# Espresso Controller

PID control and monitoring for an espresso machine.

## Requirements

- Espresso machine, e.g., Rancilio Silvia
- Raspberry PI
- Waterproof temperature sensor

## Features

- PID controlled water temperature
- Water temperature monitoring
- Water level monitoring
- Application timer

## Usage
```console
$ build/espresso appliance start -v

     ╓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    █▀─╓▄         ┌▄▄┌         ▄▄ ╙█
    █ ╫█╠█ ╔▓▓  ▄█▀╟█╙█▄  ╔▓▓ █▌╟█ ██▓▄
    █  ╙╙       █  ╘▀  █▄      ╙╙  █─▐█
    █ ╔█▀█ ╓▄▄  █▌    ▄█  ╓▄▄ ▓██▌ █▄██
    █  ▀▀▀       ╙▀▀▀▀╙       ╙▀▀└ █╨
    ╙▀██▓▓▓▓▓▓██▓▓▓▓▓▓▓▓██▓██▓▓▓██▀╙
 ╔▓▓▓▓██▓▓▓▓▓▓█▌        ▐▌ ▐█▓▓▓██▓▓▓▄
 ╫█▄▄▄▄▄▄▄▄▄▄▄██▄▄▄▄▄▄▄▄██      ▐█ ▄██▄
      ╫▌          █▌▄█          ▐█ █▌▐█
      ╫▌           └└─          ▐█ █▄▐█
      ╫▌      ╒▓▓▓▓▓▓▓▓▓▓▓▓▓▄   ▐█ ╙╙╙└
      ╫▌      ▐█▄▄▄▄▄▄▄▄██  █▌  ▐█
      ╫▌      ╘█        █▀▀▀▀   ▐█
      █▌       ╠█▓▄┌ ▄▄█▌       ▐█
    █▀╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙█
    █                              █─
    ╙▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

2020-04-16T22:51:05.660-0400	INFO	appliance/server.go:61	Initializing gRPC server	{"port": 8080}
2020-04-16T22:51:05.660-0400	INFO	appliance/server.go:69	Initializing gRPC web server	{"port": 8080}
2020-04-16T22:51:05.659-0400	DEBUG	bangbang/bangbang.go:91	Temperature sampled	{"temperature": 92.09320831298828}
2020-04-16T22:51:05.661-0400	INFO	bangbang/bangbang.go:46	Switching heating element on	{"curTemperature": 92.09320831298828, "targetTemperature": 93}
```

## Credits

Logo icon made by [catkuro](https://www.flaticon.com/authors/catkuro) from [flaticon.com](https://www.flaticon.com) and converted to ASCII art using [asciiart.club](https://asciiart.club).
