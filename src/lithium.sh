#!/bin/bash

if [[ $1 -eq "help" ]]; then

  echo $(/etc/lithium/bin/help.sh $2 $3);

  exit 0;
  
elif [[ $1 -eq "compile" ]]; then
  
elif [[ $1 -eq "translate" ]]
then

elif [[ $1 -eq "install" ]]
then

  if [[ $2 -eq "package" ]]
  then

    IFS"/" && githubrepo=($3)

    cd /etc/lithium/packages

    mkdir $($githubrepo[0])

    cd $($githubrepo[0])

    git clone https://github.com/$(3)

    chmod +x install.sh

    ./install.sh

  elif
  
elif [ $1 -eq "update" ]
then

  cd /etc/lithium/repo
  rm -r *
  git clone git://github.com/thomasjamesfoster96/lithium.git
  src/update.sh
  
elif [ $1 -eq "run" ]
then

elif [ $1 -eq "settings" ]
then

  vim /etc/lithium/settings.conf
  
fi
