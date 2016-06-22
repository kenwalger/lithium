#!/usr/bin/env node

const program = require('commander');

program
	.version(require('../package.json').version)
	.option('-o, --output <path>]', 'specify a output directory/file')
	.option('-f, --format [name]', 'specify the format of the input')
	.option('-t, --target [name]', 'specify a compile target')
	.option('-e, --engine [name]', 'specify which compiler/interpreter to use')

program
	.command('add')
	.action(require('add.js'))

program
	.command('compile [script]')
	.action(require('compile.js'));

program
	.command('document [file]')
	.option('-o, --out <path>', 'The output directory for documentation.')
	.option('-f, --format [type]', 'The format that documentation should be output as.', 'html')
	.action(require('document.js'));

program
	.command('generate <file>')
	.action(require('generate.js'));

program
	.command('get [key]')
	.action(require('get.js'));

program
	.command('init [name]')
	.action(require('init.js'));

program
	.command('install [packages...]')
	.action(require('install.js'));

program
	.command('login')
	.action(require('login.js'));

program
	.command('logout')
	.action(require('logout.js'));

program
	.command('optimize')
	.option('-o, -optimizer <optimizer>')
	.action(require('optimize.js'));

program
	.command('parse [file]')
	.option('-p, --parser [parser]', 'The parser to use when parsing the file.')
	.action(require('parse.js'));

program
	.command('publish')
	.option('-r, --repository [repository]', 'The repository to publish the package to.')
	.action(require('publish.js'));

program
	.command('run [script]')
	.action(require('run.js'));

program
	.command('set <key> <value>')
	.action(require('set.js'));

program
	.command('*')
	.action(require('repl.js'));

program.parse(process.argv);