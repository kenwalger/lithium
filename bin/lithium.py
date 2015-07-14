#!/usr/bin/env python

import lithium
import sys

rawArgs = sys.argv[1:]
parsedArgs = {}
whatToDo = 'repl'
option = re.compile('^--.*$')

if rawArgs[0] == "install":
	whatToDo = rawArgs.pop(0)
	if not option.match(rawArgs[0])
		parsedArgs['package'] = rawArgs.pop(0)
elif rawArgs[0] == "run" or rawArgs[0] == "compile"
	whatToDp = rawArgs.pop(0)
	if not option.match(rawArgs[0])
		parsedArgs['file'] = rawArgs.pop(0)
else
	if not option.match(rawArgs[0])
		whatToDo = 'run'
		parsedArgs['file'] = rawArgs.pop(0)
	else 
		whatToDo = 'repl'

i = 0

while len(rawArgs) > 0
	if option.match(rawArgs[i])
		if option.match(rawArgs[i+1])
			parsedArgs[rawArgs[i][2:]] = True
			i += 1
		else
			parsedArgs[rawArgs[i][2:]] = rawArgs[i+1]
			i += 2

lithium[whatToDo](parsedArgs)