display alert "Would you like to install lithium in /usr/bin or the Applications folder?" buttons {"/usr/bin", "Applications"}
set theAnswer to button returned of the result
if theAnswer is "/usr/bin" then

	do shell script "cd /etc

	sudo mkdir lithium

	cd lithium

	mkdir source
	mkdir packages
	mkdir compilers
	mkdir docs
	mkdir settings
	mkdir bin

	cp -R $ROOT/docs/* /etc/lithium/docs/

	cp -R $ROOT/src/* /etc/lithium/bin/

	cd /etc/lithium/bin

	chmod +x lithium.sh

	mv lithium.sh /usr/bin/lithium

	cd /etc/lithium/source

	git clone https://github.com/thomasfoster96/lithium.git

	cd /etc/lithium/settings

	sudo '{}' > compilers.json

	# Go to /usr/lib and make a place to store modules.

	cd /usr/lib

	mkdir lithium

	cp -R $ROOT/lib/* /usr/lib/lithium/

	exit 0" with administrator privileges

else
	
end if

display alert "Would you like to install lithium-to-javascript alongside lithium?" buttons {"No", "Yes"}
set theAnswer to button returned of the result
if theAnswer is "No" then
	
end if