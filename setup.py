from setuptools import setup, find_packages
import codecs

setup(
    name='src',

    # Versions should comply with PEP440. For single-sourced versioning, see
    # http://packaging.python.org/en/latest/tutorial.html#version
    version= '0.0.1',

    description='A sample Python project',
    long_description='Hi',

    # The project URL.
    url='https://github.com/dghubble/pypkg',

    # Author details
    author='Dalton Hubble',
    author_email='dghubble@gmail.com',

    # Choose your license
    license='MIT',
    # What does your project relate to?
    keywords='pypkg setuptools development',

    # You can just specify the packages manually here if your project is
    # simple. Or you can use find_packages().
    packages=['src', 'src'],

    # Run-time package dependencies. These will be installed by pip when your
    # project is installed.
    install_requires=[
        'requests',
    ],

    # Data files included in your packages. If using Python 2.6 or less, 
    # then these have to be included in MANIFEST.in as well.
    package_data={
        'src': ['package_data.dat'],
    }
)
