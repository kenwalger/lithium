#!/usr/bin/env node

import * as lithium from '../src/index.js';

let rawArgs = process.argv.slice(2);
let parsedArgs = {};
let whatToDo = 'repl';

switch(rawArgs[0]){

	// Install a package/toolkit.
	case "install":
		rawArgs.shift();
		if(!rawArgs[0].match(/^--.*$/)){
			parsedArgs["package"] = rawArgs.shift();
		}
		break;

	// User wants to run or compile a Lithium file.
	case "run":
	case "compile":
		rawArgs.shift();
		if(!rawArgs[0].match(/^--.*$/)){
			parsedArgs["file"] = rawArgs.shift();
		}
		break;

	// Bare lithium command means open a repl or, if a file is supplied, run a file.
	default:
		if(!rawArgs[0].match(/^--.*$/)){
			parsedArgs["file"] = rawArgs.shift();
			whatToDo = 'run';
		} else {
			whatToDo = 'repl';
		}

}

let i = 0;
while(rawArgs.length > 0){
	if(rawArgs[i].match(/^--.*$/)){
		parsedArgs[rawArgs[i].slice(2)] = rawArgs[i+1].match(/^--.*$/) ? (i++, true) : rawArgs[i+1];
	} 
	i++;
}

lithium[whatToDo](parsedArgs);