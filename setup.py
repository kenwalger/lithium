#!/usr/bin/env python

from distutils.core import setup

setup(
  name = 'Lithium',
  version = '0.0.1',
  author = 'Thomas Foster',
  author_email = 'thomasjamesfoster@bigpond.com',
  url = 'https://github.com/thomasfoster96/lithium/',
  packages = ['lithium', 'lithium.compile'],
  package_dir = {'lithium' : 'src'},
  scripts = ['bin/lithium']
)