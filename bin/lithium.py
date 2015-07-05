#!/usr/bin/env python

import argparse
import lithium

argparser = argparse.ArgumentParser()

argparser.add_argument("source", help="Source Lithium file to use.")

method = parser.add_mutually_exclusive_group()
method.add_argument("-c", "--compile", action="store_true")
method.add_argument("-r", "--run", action="store_true")

args = argparser.parse_args()

