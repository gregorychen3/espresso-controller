#!/usr/bin/env python3
"""
We are using Sparkfun micro OLED breakout (Qwiic), article LCD-14532

Prereqs:
* all packages need to be installed including luma
* I2C is enabled on port 1
"""
import datetime
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
aux_font = ImageFont.truetype("LiberationSerif-Bold.ttf", size=10)

def print_to_oled( temp,error ):
    t_now = datetime.datetime.now(datetime.timezone.utc).strftime("%d-%m/%H:%M:%S")
    (tfont_width, tfont_height) = font.getsize(t_now)
    (font_width, font_height) = font.getsize(str(temp))
    error_str =  "Delta T="+str(error)+"°C"
    (error_font_width, error_font_height) = font.getsize(error_str)
    with canvas(device) as draw:
        draw.rectangle(device.bounding_box, outline="white", fill="black")
        draw.text((device.width // 2 - font_width // 2,
            device.height // 2 - font_height // 2),
            temp,
            font=font,
            fill="white",
        )
        draw.text((device.width // 2 - tfont_width // 3.1,
            device.height // 10 - tfont_height // 10),
            t_now,
            font=aux_font,
            fill="green",
        )
        draw.text((device.width // 2 - error_font_width // 3.1,
            device.height // 2 - error_font_height // -1.4),
            error_str,
            font=aux_font,
            fill="white",)

def run():
   with grpc.insecure_channel('localhost:8080') as channel:
      stub = espresso_pb2_grpc.EspressoStub(channel)
      #TODO: Initialize the PID values once here to P=1, I=4, D=8

      response_iter_temp = stub.BoilerTemperature(espresso_pb2.TemperatureStreamRequest())
      for response in response_iter_temp:
          print(response.sample.value)
          response_setT = stub.GetConfiguration(espresso_pb2.GetConfigurationRequest())
          print(str(response_setT.temperature))
          error = response_setT.temperature - response.sample.value
          print_to_oled(str(float(f'{response.sample.value:.1f}'))+"°C",error)
          #TODO: display an image of steaming cup if error is < 5°C
run()
