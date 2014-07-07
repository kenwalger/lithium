# -*- coding: utf-8 -*-
"""
    Core functionality of the package.
"""

from __future__ import print_function
from .utils import fancy

def echo(message):
    """
    :param message: the message to echo
    :returns: the given message
    :raises:
    """
    return message

def fancy_print(message):
    """
    Prints the message in a fancy way.

    Args:
        message (obj): the message object to echo

    Returns:
        None

    Raises:
    """
    print(fancy(message))
