#!/bin/bash

## Linux
ROOT=$(dirname $(echo $(lsof -p $$ | grep -E "/"$(basename $0)"$") | sed -r s/'^([^\/]+)\/'/'\/'/1 2>/dev/null))
if [ $? -ne 0 ]; then
## OSX
  ROOT=$(dirname $(echo $(lsof -p $$ | grep -E "/"$(basename $0)"$") | sed -E s/'^([^\/]+)\/'/'\/'/1 2>/dev/null))
fi

# Go to /etc and make a place for lithium config files, symlinks to modules and other stuff.

cd /etc

mkdir lithium

cd lithium

mkdir source
mkdir packages
mkdir compilers
mkdir docs
mkdir settings
mkdir bin

cp $ROOT/docs/* /etc/lithium/docs/

cp $ROOT/src/* /etc/lithium/bin/

cd source

git clone https://github.com/thomasfoster96/lithium.git

# Go to /usr/lib and make a place to store modules.

cd /usr/lib

mkdir lithium

cp $ROOT/lib/* /usr/lib/lithium/