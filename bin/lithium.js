#!/usr/bin/env node

var program = require('commander');

program
	.version(require('../package.json').version)
	.command('clean', 'Uninstalls all local dependencies and deletes any temporary files.')
	.command('create', 'Creates a new package.')
	.command('compile', 'Compiles a package or file.')
	.command('install [packages...]', "Installs packages.")
	.command('login', "Login to a package registry.")
	.command('logout', 'Logs out of a package registry.')
	.command('optimize', "Optimizes code.");
	.command('parse', "Parses a package or code into an AST.")
	.command('publish', "Publishes a package to a registry.")
	.command('run', "Runs a package.")
	.command('*', "Opens the REPL.")
	.parse(process.argv);