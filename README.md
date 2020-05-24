# Espresso Controller

Temperature control and monitoring for a Rancilio Silvia or comparable espresso machine.

## Requirements

- Espresso machine, e.g., [Rancilio Silvia](https://www.ranciliogroupna.com/silvia)
- Raspberry PI
- [Solid state relay](https://www.amazon.com/dp/B00HV974KC/ref=cm_sw_em_r_mt_dp_U_9WTYEbEA0TNGG)
- [Type K thermocouple](https://www.amazon.com/dp/B07MMLY3PZ/ref=cm_sw_em_r_mt_dp_U_OXTYEb0AVQZWD)
- [MAX31855 thermocouple amplifier](https://www.adafruit.com/product/269)
- [Male blade connectors](https://en.wikipedia.org/wiki/FASTON_terminal#/media/File:Faston_Style_Terminals_Male.jpg)
- Electrical wire
- Thermal tape

## Installation

### Rewire

TODO: diagram

### Raspberry Pi Setup

1. Follow instructions [here](https://projects.raspberrypi.org/en/projects/raspberry-pi-getting-started). Be sure to connect it to a wifi network.
2. Take note of the Raspberry Pi's private ip address.

```console
pi@raspberrypi:~ $ hostname -I
192.168.1.124
```

2. Copy the program to the Raspberry Pi.

```console
TODO: download from releases and scp to pi
```

3. Start the program

```console
pi@raspberrypi:~ $ ./espresso -v -r 26

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

For more information, go to https://github.com/gregorychen3/espresso-controller

2020-05-24T16:45:27.370-0400	DEBUG	temperature/temperature.go:47	Sampled temperature	{"value": 83.25}
2020-05-24T16:45:27.371-0400	DEBUG	bangbang/bangbang.go:46	Switching heating element on	{"curTemperature": 83.25, "targetTemperature": 93}
2020-05-24T16:45:27.372-0400	INFO	espresso/server.go:115	Initializing gRPC server	{"port": 8080}
2020-05-24T16:45:27.372-0400	INFO	espresso/server.go:123	Initializing gRPC web server	{"port": 8080}
...
```

### Control and monitor

Use a web browser to visit `http://<raspi_ip_addr>:8080`, e.g., `http://192.168.1.124:8080`.

TODO: screenshot

## Credits

Logo icon made by [catkuro](https://www.flaticon.com/authors/catkuro) from [flaticon.com](https://www.flaticon.com) and converted to ASCII art using [asciiart.club](https://asciiart.club).
