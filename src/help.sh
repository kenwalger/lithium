#!/bin/bash

if [ $@ -eq 0 ]
then

	echo "                   Lithium Version 0.0.1 Help                        "
	echo "                                                                     "
	echo "For help type:                                                       "
	echo "                                                                     "
	echo "--feature <feature> for help with a particular Lithium feature       "
	echo "                                                                     "
	echo "--package <name> for help with a Lithium package                     "
	echo "                                                                     "
	echo "--error <number> for help with an error message                      "
	echo "                                                                     "
	echo "--action <task> for help with a common task, such as translating     "
	echo "                                                                     "
	echo "--quit to quit Lithium help                                          "
	echo "                                                                     "

	read -p "lithium-help>" answer

	bash /etc/lithium/bin/help.sh answer

else

  if [ $1 -eq "--feature" ]
  then

  	read -p "lithium-help>" answer
	bash /etc/lithium/bin/help.sh answer

  elif [ $1 -eq "--package" ]
  then

  	/usr/lib/$($2)/docs/help.sh

  elif [ $1 -eq "--error" ]
  then

  	read -p "lithium-help>" answer
	bash /etc/lithium/bin/help.sh answer

  elif [ $1 -eq "--action" ]
  then

  	read -p "lithium-help>" answer
	bash /etc/lithium/bin/help.sh answer

  elif [ $1 -eq "--quit" ]
  then

  	exit 0;

  fi
  
fi
