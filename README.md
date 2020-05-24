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
pi@raspberrypi:~ $ ./espresso -v -r 26
For more information, go to https://github.com/gregorychen3/espresso-controller

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

2020-05-24T12:14:27.865-0400	DEBUG	temperature/temperature.go:47	Sampled temperature	{"value": 81}
2020-05-24T12:14:27.867-0400	DEBUG	bangbang/bangbang.go:46	Switching heating element on	{"curTemperature": 81, "targetTemperature": 93}
2020-05-24T12:14:27.867-0400	INFO	espresso/server.go:115	Initializing gRPC server	{"port": 8080}
2020-05-24T12:14:27.867-0400	INFO	espresso/server.go:123	Initializing gRPC web server	{"port": 8080}
2020-05-24T12:14:28.867-0400	DEBUG	temperature/temperature.go:47	Sampled temperature	{"value": 81}
```

## Credits

Logo icon made by [catkuro](https://www.flaticon.com/authors/catkuro) from [flaticon.com](https://www.flaticon.com) and converted to ASCII art using [asciiart.club](https://asciiart.club).
