#!/usr/bin/env ruby

require 'lithium'

rawArgs = ARGV
parsedArgs = {}
whatToDo = ''
option = /^--.*$/

case rawArgs[0]
when 'install'
	whatToDo = rawArgs.shift
	if !option.match(rawArgs[0])
		parsedArgs['package'] = rawArgs.shift
when 'run'
	whatToDo = rawArgs.shift
	if !option.match(rawArgs[0])
		parsedArgs['file'] = rawArgs.shift
when 'compile'
	whatToDo = rawArgs.shift
	if !option.match(rawArgs[0])
		parsedArgs['file'] = rawArgs.shift
else
	if !option.match(rawArgs[0])
		whatToDo = 'run'
		parsedArgs['file'] = rawArgs.shift
	else
		whatToDo = 'repl'
	end
end

i = 0
while rawArgs.length > 0
	if option.match(rawArgs[i])
		if option.match(rawArgs[i+1])
			parsedArgs[rawArgs[i][2..rawArgs[i].size]] = true
			i += 1
		else
			parsedArgs[rawArgs[i][2..rawArgs[i].size]] = rawArgs[i+1]
			i += 2
		end
	end
end

lithium[whatToDo](parsedArgs)