#!/bin/bash

## Linux
ROOT=$(dirname $(echo $(lsof -p $$ | grep -E "/"$(basename $0)"$") | sed -r s/'^([^\/]+)\/'/'\/'/1 2>/dev/null))
if [ $? -ne 0 ]; then
## OSX
  ROOT=$(dirname $(echo $(lsof -p $$ | grep -E "/"$(basename $0)"$") | sed -E s/'^([^\/]+)\/'/'\/'/1 2>/dev/null))
fi

# Go to /etc and make a place for lithium config files, symlinks to modules and other stuff.

cd /etc

sudo mkdir lithium

cd lithium

sudo mkdir source
sudo mkdir packages
sudo mkdir compilers
sudo mkdir docs
sudo mkdir settings
sudo mkdir bin

sudo cp -R $ROOT/docs/* /etc/lithium/docs/

sudo cp -R $ROOT/src/* /etc/lithium/bin/

cd /etc/lithium/bin

sudo chmod +x lithium.sh

sudo mv lithium.sh /usr/bin/lithium

cd /etc/lithium/source

sudo git clone https://github.com/thomasfoster96/lithium.git

cd /etc/lithium/settings

"{}" > compilers.json

# Go to /usr/lib and make a place to store modules.

cd /usr/lib

sudo mkdir lithium

sudo cp -R $ROOT/lib/* /usr/lib/lithium/

exit 0