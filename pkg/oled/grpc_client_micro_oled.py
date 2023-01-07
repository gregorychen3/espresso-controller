#!/usr/bin/env python3
"""
We are using Sparkfun micro OLED breakout (Qwiic), article LCD-14532

Prereqs:
* install DSEG font: sudo apt-get install fonts-dseg
* all packages need to be installed including luma

"""

import board
import digitalio
from PIL import Image, ImageDraw, ImageFont
from luma.core.interface.serial import i2c
from luma.core.render import canvas
from luma.oled.device import ssd1306
import grpc
import espresso_pb2
import espresso_pb2_grpc
import requests
import os
import subprocess
import sys, time

# Use for I2C.
serial = i2c(port=1, address=0x3D)
device = ssd1306(serial, width=64, height=48, rotate=2)
font = ImageFont.truetype("LiberationSerif-Bold.ttf", size=15)

def print_to_oled( temperature ):
    text = str(temperature)+"°C"
    (font_width, font_height) = font.getsize(str(text))
    with canvas(device) as draw:
        draw.rectangle(device.bounding_box, outline="white", fill="black")
        draw.text((device.width // 2 - font_width // 2, device.height // 2 - font_height // 2),
                text,
                font=font,
                fill="white",
        )

def run():
   with grpc.insecure_channel('localhost:8080') as channel:
      stub = espresso_pb2_grpc.EspressoStub(channel)
      response_iterator = stub.BoilerTemperature(espresso_pb2.TemperatureStreamRequest())
      for response in response_iterator:
          print(response.sample.value)
          print_to_oled(float(f'{response.sample.value:.1f}'))
run()
