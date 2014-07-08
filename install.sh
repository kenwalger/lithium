#!/bin/bash

echo "Installing Lithium..."

if [[ $(hash oscript) -ne /dev/null ]]; then
	osascript install/mac-os-x.applescript
	exit 0;
fi	

ROOT=$(dirname $(echo $(lsof -p $$ | grep -E "/"$(basename $0)"$") | sed -r s/'^([^\/]+)\/'/'\/'/1 2>/dev/null))

# Go to /etc and make a place for lithium config files, symlinks to modules and other stuff.

cd /etc

echo "Unpacking..."

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

echo "Installing commands..."

cd /etc/lithium/bin

sudo chmod +x lithium.sh

sudo mv lithium.sh /usr/bin/lithium

cd /etc/lithium/source

sudo git clone https://github.com/thomasfoster96/lithium.git

echo "Initialising settings..."

cd /etc/lithium/settings

sudo "{}" > compilers.json

echo "Installing standard library packages..."

cd /usr/lib

sudo mkdir lithium

sudo cp -R $ROOT/lib/* /usr/lib/lithium/

echo "Lithium has been installed. Use the lithium help to get help from here on in."

echo "Installing lithium-to-javascript..."

cd /etc/lithium/compilers

sudo mkdir lithium-to-javascript

git clone https://github.com/thomasfoster96/lithium-to-javascript.git

chmod +x install.sh

./install.sh

echo "Installed lithium-to-javascript."

exit 0