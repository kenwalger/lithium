#!/usr/bin/env node

var colors = require('colors');
var lithium = require('../src/index.js');
var fs = require('fs');
var path = require('path');

var options = {
	"file" : undefined,
	"compile" : false,
	"parse" : false,
	"run" : false,
	"output" : undefined,
	"serialise" : false,
	"target" : undefined,
	"origin" : "lithium",
	"optimise" : "all",
	"help" : false
}

process.argv.forEach(function(value){
	if(value.substring(0, 2) === "--"){
		var opt = value.substring(2);
		if(opt.indexOf("=") > -1){
			var opts = opt.split('=');

			options[opts[0]] = opts[1];
		}else{
			options[value.substring(2)] = true;			
		}
	}else{
		options["file"] = value;
	}
});

if(options.help){

	if(options.compile && !options.parse && !options.run){

		console.log("Use: lithium [options] file");
		console.log("\n");
		console.log("Options:");
		console.log("\n");
		console.log("    --output     Specifes a file to write output to.")
		console.log("    --target     Specifies the target format for compilation.");
		console.log("    --optimise   Comma separated list of things to optimise. Can be 'all', 'none', 'speed', 'memory' and/or 'size'");


	}else if(options.parse && !options.compile && !options.run){

	}else if(!options.parse && !options.compile && options.file && ){

	}else if(!options.parse && !options.compile && !options.file){

	}else{

		console.log("How to use the " + "Lithium".rainbow + " CLI interface:");
		console.log("\n");
		console.log("    lithium [options] [file]");
		console.log("\n");
		console.log("Options:");
		console.log("\n");
		console.log("    --compile    Compile the given file, or if there is no file specified.");
		console.log("    --parse      Tokenise and parse a given file.");
		console.log("    --run        Run the given file.");
		console.log("    --serialise  Serialises an AST to either readbale code or compiled code.");
		console.log("    --help       Get help");
		console.log("\n");
		console.log("    --format     Specifies the format of the input file.");
		console.log("    --output     Specifes a file to write output to.")
		console.log("    --target     Specifies the target format for serialisation or compilation.");
		console.log("    --optimise   Comma separated list of things to optimise. Can be 'all', 'none', 'speed', 'memory' and/or 'size'");
		console.log("\n");
		console.log("Examples:");
		console.log("\n");
		console.log("    lithium --compile --optimise=size --target=javascript@1.7 main.li");
		console.log("    Compiles a Lithium file to Javascript, optimising for code size.".italics);
		console.lof("\n");
		console.log("    lithium");
		console.log("    Starts a REPL.".italics);

	}

}else if(options.compile && !options.parse && !options.run){

	var compiler = lithium.compile({
		optimise : options.optimise,
		format : options.format,
		target : options.target
	});

	if(typeof options.file === "string"){
		var streamIn = fs.createReadStream(path.join(process.cwd(), options.file));
	}else{
		var streamIn = process.stdin;
	}

	if(typeof options.output === "string"){
		var streamOut = fs.createWriteStream(path.join(process.cwd(), options.output));
	}else{
		var streamOut = process.stdout;
	}

	compiler.

	streamIn.pipe(compiler.stdin);

	compiler.stdout.pipe(streamOut);

}else if(options.parse && !options.compile && !options.run){

	var compiler = lithium.compile({
		optimise : options.optimise,
		format : options.format,
		target : options.target
	});

	if(typeof options.file === "string"){
		var streamIn = fs.createReadStream(path.join(process.cwd(), options.file));
	}else{
		var streamIn = process.stdin;
	}

	if(typeof options.output === "string"){
		var streamOut = fs.createWriteStream(path.join(process.cwd(), options.output));
	}else{
		var streamOut = process.stdout;
	}

	compiler.

	streamIn.pipe(compiler.stdin);

	compiler.stdout.pipe(streamOut);

}else if(!options.parse && !options.compile && (options.file || options.run )){

	var compiler = lithium.run({
		optimise : options.optimise,
		format : options.format,
		target : options.target
	});

	if(typeof options.file === "string"){
		var streamIn = fs.createReadStream(path.join(process.cwd(), options.file));
	}else{
		var streamIn = process.stdin;
	}

	if(typeof options.output === "string"){
		var streamOut = fs.createWriteStream(path.join(process.cwd(), options.output));
	}else{
		var streamOut = process.stdout;
	}

	compiler.

	streamIn.pipe(compiler.stdin);

	compiler.stdout.pipe(streamOut);

}else if(!options.parse && !options.compile && !options.file){

	var repl = lithium.repl();

}else{
	console.log("Error: Incorrect CLI usage.");
}