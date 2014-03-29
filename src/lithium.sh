#!/bin/bash

if [ $1 -eq "help" ]
then
  /etc/lithium/help.sh $2 $3
elif [ $1 -eq "compile" ]
then
  
elif [ $1 -eq "translate" ]
then

elif [ $1 -eq "modules" ]
then

  if [ $2 -eq "install" ]
  then

    if ! [[ $2 =~ [^a-zA-Z0-9] ]]
    then
  
    else
    then
    
      cd /etc/lithium/pachages
      git clone $2
    
    fi
    
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
