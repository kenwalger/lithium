#!/usr/bin/env node

var path = require('path');
var fs   = require('fs');
var li2js = require(path.join(path.dirname(fs.realpathSync(__filename)), '../src') + '/index.js');

/*
 * No arguments, so start the REPL.
 */

if (process.argv.length === 2) {

	li2js.startREPL();

} else {

	switch(process.argv[2]){

		/*
		 * Outputs a basic manual for li2js
		 */

		case "help":

			process.stdout.write("To run the Lithium REPL using li2js: \n");
			process.stdout.write("> li2js\n");

			process.stdout.write("To get help with using li2js: \n");
			process.stdout.write("> li2js help\n");

			process.stdout.write("To parse a Lithium file and generate an AST in JSON format using li2js: \n");
			process.stdout.write("> li2js parse input.li [output.last]\n");

			process.stdout.write("To translate a Lithium file to JavaScript using li2js: \n");
			process.stdout.write("> li2js compile input.li [output.js]\n");

			process.stdout.write("To run a Lithium file using li2js: \n");
			process.stdout.write("> li2js input.li\n");

			break;

		case "parse":

			if(process.length >= 4){

				var out = li2js.tokenise(fs.readFileSync(process.argv[3])).lexer().parse;

				if(process.argv.length >= 5){
					fs.writeFileSync(process.argv[4], out);
				}else{
					process.stdout.write(out);
				}

			}else{

				process.stdout.write("To parse a Lithium file using li2js please specify a file and optionally an output file.\n");
				process.stdout.write("Example: > li2js parse input.li output.js                                                      \n");

			}

			break;

		case "compile":

			if(process.length >= 4){

				var out = li2js.compile(fs.readFileSync(process.argv[2]));

				if(process.argv.length >= 5){
					fs.writeFileSync(process.argv[4], out);
				}else{
					process.stdout.write(out);
				}

			}else{

				process.stdout.write("To compile a Lithium AST file to JavaScript please specify a file and optionally an output file.\n");
				process.stdout.write("Example: > li2js compile input.last output.js                                                      \n");

			}

			break;

		default:

			if(process.length >= 3){

				li2js.run(fs.readFileSync(process.argv[3]));

			}else{

				process.stdout.write("To run a Lithium file using li2js please specify a file to run.\n");
				process.stdout.write("Example: > li2js index.li                                      \n");

			}

			break;
	}

}