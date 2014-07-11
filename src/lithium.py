#!/usr/bin/env python

import sys, os, json

args = sys.argv

if args[1] == "help" 

  if len(args) == 2

    sys.stdout.write("                   Lithium Version 0.0.1 Help                        ")
    sys.stdout.write("                                                                     ")
    sys.stdout.write("For help type:                                                       ")
    sys.stdout.write("                                                                     ")
    sys.stdout.write("--feature <feature> for help with a particular Lithium feature       ")
    sys.stdout.write("                                                                     ")
    sys.stdout.write("--package <name> for help with a Lithium package                     ")
    sys.stdout.write("                                                                     ")
    sys.stdout.write("--error <number> for help with an error message                      ")
    sys.stdout.write("                                                                     ")
    sys.stdout.write("--action <task> for help with a common task, such as translating     ")
    sys.stdout.write("                                                                     ")
    sys.stdout.write("--quit to quit Lithium help                                          ")
    sys.stdout.write("                                                                     ")

  else
  
elif args[1] == "compile" 
  
elif args[1] == "translate" 

if args[1] == "install" 

  if [ $2 -eq "package" ]
  then

    IFS"/" && githubrepo=($3)

    cd /etc/lithium/packages

    mkdir $($githubrepo[0])

    cd $($githubrepo[0])

    git clone https://github.com/$(3)

    chmod +x install.sh

    ./install.sh
  
if args[1] == "update"

if args[1] == "run"

if args[1] == "settings"