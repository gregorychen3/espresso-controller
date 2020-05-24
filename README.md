# Espresso Controller

Temperature control and monitoring for an espresso machine.

## Requirements

- Espresso machine, e.g., [Rancilio Silvia](https://www.ranciliogroupna.com/silvia)
- Raspberry PI
- [Solid state relay](https://www.amazon.com/dp/B00HV974KC/ref=cm_sw_em_r_mt_dp_U_9WTYEbEA0TNGG)
- [Type K thermocouple](https://www.amazon.com/dp/B07MMLY3PZ/ref=cm_sw_em_r_mt_dp_U_OXTYEb0AVQZWD)
- [MAX31855 thermocouple amplifier](https://www.adafruit.com/product/269)
- Thermal tape

## Usage

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

## Credits

Logo icon made by [catkuro](https://www.flaticon.com/authors/catkuro) from [flaticon.com](https://www.flaticon.com) and converted to ASCII art using [asciiart.club](https://asciiart.club).
