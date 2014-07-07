# -*- coding: utf-8 -*-
"""
    Application entry point.
"""
from .core import echo, fancy_print

def main():
    """Entry point for the application script"""
    fancy_print(echo("Call your main application code here"))
