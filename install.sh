#!/bin/bash

## Linux
LSOF=$(lsof -p $$ | grep -E "/"$(basename $0)"$")
MY_PATH=$(echo $LSOF | sed -r s/'^([^\/]+)\/'/'\/'/1 2>/dev/null)
if [ $? -ne 0 ]; then
## OSX
  MY_PATH=$(echo $LSOF | sed -E s/'^([^\/]+)\/'/'\/'/1 2>/dev/null)
fi

MY_ROOT=$(dirname $MY_PATH)

LIB="$MY_ROOT/lib/*"

# Go to /etc and make a place for lithium config files, symlinks to modules and other stuff.

cd /etc

mkdir lithium

cd lithium

mkdir source
mkdir packages
mkdir

# Go to /usr/lib and make a place to store modules.

cd /usr/lib

mkdir lithium

cp $LIB /usr/lib/lithium/