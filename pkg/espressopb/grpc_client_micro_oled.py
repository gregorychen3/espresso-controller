"""
This demo will fill the screen with white, draw a black box on top
and then print Hello World! in the center of the display

This example is for use on (Linux) computers that are using CPython with
Adafruit Blinka to support CircuitPython libraries. CircuitPython does
not support PIL/pillow (python imaging library)!

We are using Sparkfun micro OLED breakout (Qwiic), article LCD-14532
"""

import board
import digitalio
from PIL import Image, ImageDraw, ImageFont
import adafruit_ssd1306
import grpc
import espresso_pb2
import espresso_pb2_grpc
import requests
import os
import subprocess
import sys, time

# Define the Reset Pin
oled_reset = digitalio.DigitalInOut(board.D4)

# Change these
# to the right size for your display!
WIDTH = 64
HEIGHT = 48  # Change to 64 if needed
BORDER = 0

# Use for I2C.
i2c = board.I2C()
oled = adafruit_ssd1306.SSD1306_I2C(WIDTH, HEIGHT, i2c, addr=0x3D, reset=oled_reset)

# Use for SPI
# spi = board.SPI()
# oled_cs = digitalio.DigitalInOut(board.D5)
# oled_dc = digitalio.DigitalInOut(board.D6)
# oled = adafruit_ssd1306.SSD1306_SPI(WIDTH, HEIGHT, spi, oled_dc, oled_reset, oled_cs)

# Clear display.
oled.fill(0)
oled.show()

# Create blank image for drawing.
# Make sure to create image with mode '1' for 1-bit color.
image = Image.new("1", (oled.width, oled.height))

# Get drawing object to draw on image.
draw = ImageDraw.Draw(image)

# Draw a white background
draw.rectangle((0, 0, oled.width, oled.height), outline=255, fill=255)

# Draw a smaller inner rectangle
draw.rectangle(
    (BORDER, BORDER, oled.width - BORDER - 1, oled.height - BORDER - 1),
    outline=0,
    fill=0,
)
# Load default font.
#font = ImageFont.load_default()
font = ImageFont.truetype("DejaVuSans-Oblique.ttf", size=15)

def print_to_oled( temperature ):
    # Create blank image for drawing.
    # Make sure to create image with mode '1' for 1-bit color.
    image = Image.new("1", (oled.width, oled.height))
    # Get drawing object to draw on image.
    draw = ImageDraw.Draw(image)
    # Clear display.
    oled.fill(0)
    text = str(temperature)+"°C"
    (font_width, font_height) = font.getsize(str(text))
    draw.text(
        (oled.width // 2 - font_width // 2, oled.height // 2 - font_height // 2),
              text,
              font=font,
              fill=255,
    )
    oled.image(image)
    oled.show()

def run():
   with grpc.insecure_channel('localhost:8080') as channel:
      stub = espresso_pb2_grpc.EspressoStub(channel)
      response_iterator = stub.BoilerTemperature(espresso_pb2.TemperatureStreamRequest())
      for response in response_iterator:
          print(response.sample.value)
          print_to_oled(float(f'{response.sample.value:.1f}'))
run()